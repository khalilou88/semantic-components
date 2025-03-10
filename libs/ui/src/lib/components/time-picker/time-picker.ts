import { ActiveDescendantKeyManager, _IdGenerator } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { ENTER, ESCAPE, TAB, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterRenderRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  InputSignal,
  OnDestroy,
  OutputEmitterRef,
  Signal,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  viewChild,
  viewChildren,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiClockIcon } from '@semantic-icons/lucide-icons';
import { Subscription } from 'rxjs';

import { ScSettings } from '../../utils';
import { ScButton } from '../button';
import { ScTimeOption } from './time-option';
import { ScTimePickerInput } from './time-picker-input';

/**
 * Time selection option that can be displayed within a `mat-timepicker`.
 */
export interface MatTimepickerOption<D = unknown> {
  /** Date value of the option. */
  value: D;

  /** Label to show to the user. */
  label: string;
}

/** Event emitted when a value is selected in the timepicker. */
export interface MatTimepickerSelected<D> {
  value: D;
}

@Component({
  selector: 'sc-time-picker',
  imports: [SiClockIcon, ScButton, ScTimeOption, ScTimePickerInput],
  template: `
    <button class="absolute inset-y-0 end-0 pe-4" (click)="open()" sc-button variant="ghost">
      <svg si-clock-icon></svg>
    </button>
    <input #input scTimePickerInput type="text" placeholder="hh:mm" />

    <ng-template #panelTemplate>
      <div
        class="relative z-50 max-h-96 w-full min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        [attr.aria-label]="ariaLabel() || null"
        [attr.aria-labelledby]="_getAriaLabelledby()"
        [id]="panelId"
        role="listbox"
      >
        @for (option of _timeOptions; track option.value) {
          <sc-time-option [value]="option.value" (selected)="_selectValue(option.value)">
            {{ option.label }}
          </sc-time-option>
        }
      </div>
    </ng-template>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePicker implements OnDestroy {
  settings = inject(ScSettings);

  clock = input<'am-pm' | '24-hour' | undefined>(undefined);

  _clock = computed(() => {
    if (this.clock() !== undefined) {
      return this.clock();
    }

    return this.settings.clock();
  });

  class = input<string>('');
  classes = computed(() => cn('flex relative', this.class()));

  private readonly _overlay = inject(Overlay);
  private readonly _dir = inject(Directionality, { optional: true });
  private readonly _viewContainerRef = inject(ViewContainerRef);
  private readonly _injector = inject(Injector);
  // private _defaultConfig = inject(MAT_TIMEPICKER_CONFIG, { optional: true });
  // private _dateAdapter = inject<DateAdapter<D>>(DateAdapter, { optional: true })!;
  // private _dateFormats = inject(MAT_DATE_FORMATS, { optional: true })!;

  private readonly _isOpen = signal(false);
  private readonly _activeDescendant = signal<string | null>(null);

  private readonly _input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  private _overlayRef: OverlayRef | null = null;
  private _portal: TemplatePortal<unknown> | null = null;
  private readonly _optionsCacheKey: string | null = null;
  private readonly _localeChanges!: Subscription;
  private _onOpenRender: AfterRenderRef | null = null;

  protected _panelTemplate = viewChild.required<TemplateRef<unknown>>('panelTemplate');
  protected _timeOptions: readonly MatTimepickerOption<string>[] = [];
  protected _options = viewChildren(ScTimeOption);

  private readonly _keyManager = new ActiveDescendantKeyManager(this._options, this._injector)
    .withHomeAndEnd(true)
    .withPageUpDown(true)
    .withVerticalOrientation(true);

  /**
   * Interval between each option in the timepicker. The value can either be an amount of
   * seconds (e.g. 90) or a number with a unit (e.g. 45m). Supported units are `s` for seconds,
   * `m` for minutes or `h` for hours.
   */
  // readonly interval: InputSignalWithTransform<number | null, number | string | null> = input(
  //   parseInterval(this._defaultConfig?.interval || null),
  //   { transform: parseInterval },
  // );

  /**
   * Array of pre-defined options that the user can select from, as an alternative to using the
   * `interval` input. An error will be thrown if both `options` and `interval` are specified.
   */
  readonly options: InputSignal<readonly MatTimepickerOption<string>[] | null> = input<
    readonly MatTimepickerOption<string>[] | null
  >(null);

  /** Whether the timepicker is open. */
  readonly isOpen: Signal<boolean> = this._isOpen.asReadonly();

  /** Emits when the user selects a time. */
  readonly selected: OutputEmitterRef<MatTimepickerSelected<string>> = output();

  /** Emits when the timepicker is opened. */
  readonly opened: OutputEmitterRef<void> = output();

  /** Emits when the timepicker is closed. */
  readonly closed: OutputEmitterRef<void> = output();

  /** ID of the active descendant option. */
  readonly activeDescendant: Signal<string | null> = this._activeDescendant.asReadonly();

  /** Unique ID of the timepicker's panel */
  readonly panelId: string = inject(_IdGenerator).getId('sc-time-picker-panel-');

  /** Whether ripples within the timepicker should be disabled. */
  // readonly disableRipple: InputSignalWithTransform<boolean, unknown> = input(
  //   this._defaultConfig?.disableRipple ?? false,
  //   {
  //     transform: booleanAttribute,
  //   },
  // );

  /** ARIA label for the timepicker panel. */
  readonly ariaLabel: InputSignal<string | null> = input<string | null>(null, {
    alias: 'aria-label',
  });

  /** ID of the label element for the timepicker panel. */
  readonly ariaLabelledby: InputSignal<string | null> = input<string | null>(null, {
    alias: 'aria-labelledby',
  });

  /** Whether the timepicker is currently disabled. */
  readonly disabled: Signal<boolean> = computed(() => !!this._input().nativeElement?.disabled);

  constructor() {
    // if (typeof ngDevMode === 'undefined' || ngDevMode) {
    // validateAdapter(this._dateAdapter, this._dateFormats);

    effect(() => {
      const options = this.options();
      // const interval = this.interval();

      // if (options !== null && interval !== null) {
      //   throw new Error(
      //     'Cannot specify both the `options` and `interval` inputs at the same time',
      //   );
      // } else if (options?.length === 0) {
      //   throw new Error('Value of `options` input cannot be an empty array');
      // }
    });
    // }

    // Since the panel ID is static, we can set it once without having to maintain a host binding.
    const element = inject<ElementRef<HTMLElement>>(ElementRef);
    element.nativeElement.setAttribute('sc-time-picker-panel-id', this.panelId);
    this._handleLocaleChanges();
    this._handleInputStateChanges();
    this._keyManager.change.subscribe(() =>
      this._activeDescendant.set(this._keyManager.activeItem?.id() || null),
    );
  }

  /** Opens the timepicker. */
  open(): void {
    const input = this._input();

    if (!input) {
      return;
    }

    // Focus should already be on the input, but this call is in case the timepicker is opened
    // programmatically. We need to call this even if the timepicker is already open, because
    // the user might be clicking the toggle.
    input.nativeElement.focus();

    if (this._isOpen()) {
      return;
    }

    this._isOpen.set(true);
    this._generateOptions();
    const overlayRef = this._getOverlayRef();
    overlayRef.updateSize({ width: input.nativeElement.offsetWidth });

    this._portal ??= new TemplatePortal(this._panelTemplate(), this._viewContainerRef);
    overlayRef.attach(this._portal);
    this._onOpenRender?.destroy();
    this._onOpenRender = afterNextRender(
      () => {
        const options = this._options();
        this._syncSelectedState(input.nativeElement?.value, options, options[0]);
        this._onOpenRender = null;
      },
      { injector: this._injector },
    );

    this.opened.emit();
  }

  /** Closes the timepicker. */
  close(): void {
    if (this._isOpen()) {
      this._isOpen.set(false);
      this._overlayRef?.detach();
      this.closed.emit();
    }
  }

  /** Registers an input with the timepicker. */
  // registerInput(input: MatTimepickerInput<D>): void {
  //   const currentInput = this._input();

  //   if (currentInput && input !== currentInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
  //     throw new Error('MatTimepicker can only be registered with one input at a time');
  //   }

  //   this._input.set(input);
  // }

  ngOnDestroy(): void {
    this._keyManager.destroy();
    this._localeChanges.unsubscribe();
    this._onOpenRender?.destroy();
    this._overlayRef?.dispose();
  }

  /** Selects a specific time value. */
  protected _selectValue(value: string) {
    //TODO
    this._input().nativeElement.value = value;

    this.close();
    this.selected.emit({ value });
    this._input().nativeElement?.focus();
  }

  /** Gets the value of the `aria-labelledby` attribute. */
  protected _getAriaLabelledby(): string | null {
    if (this.ariaLabel()) {
      return null;
    }
    return this.ariaLabelledby() || null;
  }

  /** Creates an overlay reference for the timepicker panel. */
  private _getOverlayRef(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._input())
      .withFlexibleDimensions(false)
      .withPush(false)
      // .withTransformOriginOn('.mat-timepicker-panel')
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          // panelClass: 'mat-timepicker-above',
        },
      ]);

    this._overlayRef = this._overlay.create({
      positionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._dir || 'ltr',
      hasBackdrop: false,
    });

    this._overlayRef.keydownEvents().subscribe((event) => {
      this._handleKeydown(event);
    });

    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const target = _getEventTarget(event) as HTMLElement;
      const origin = this._input().nativeElement;

      if (target && origin && target !== origin && !origin.contains(target)) {
        this.close();
      }
    });

    return this._overlayRef;
  }

  /** Generates the list of options from which the user can select.. */
  private _generateOptions(): void {
    // Default the interval to 30 minutes.

    this._timeOptions = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8', label: '8' },
      { value: '9', label: '9' },

      { value: '10', label: '10' },
      { value: '20', label: '20' },
      { value: '30', label: '30' },
      { value: '40', label: '40' },
      { value: '50', label: '50' },
      { value: '60', label: '60' },
      { value: '70', label: '70' },
      { value: '80', label: '80' },
      { value: '90', label: '90' },

      { value: '21', label: '21' },
      { value: '31', label: '31' },
      { value: '41', label: '41' },
      { value: '51', label: '51' },
      { value: '61', label: '61' },
      { value: '71', label: '71' },
      { value: '81', label: '81' },
      { value: '91', label: '91' },
    ];
  }

  /**
   * Synchronizes the internal state of the component based on a specific selected date.
   * @param value Currently selected date.
   * @param options Options rendered out in the timepicker.
   * @param fallback Option to set as active if no option is selected.
   */
  private _syncSelectedState(
    value: string | null,
    options: readonly ScTimeOption[],
    fallback: ScTimeOption | null,
  ): void {
    let hasSelected = false;

    for (const option of options) {
      if (value && option.value() === value) {
        option.select();
        scrollOptionIntoView(option, 'center');
        untracked(() => this._keyManager.setActiveItem(option));
        hasSelected = true;
      } else {
        option.deselect();
      }
    }

    // If no option was selected, we need to reset the key manager since
    // it might be holding onto an option that no longer exists.
    if (!hasSelected) {
      if (fallback) {
        untracked(() => this._keyManager.setActiveItem(fallback));
        scrollOptionIntoView(fallback, 'center');
      } else {
        untracked(() => this._keyManager.setActiveItem(-1));
      }
    }
  }

  /** Handles keyboard events while the overlay is open. */
  private _handleKeydown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;

    if (keyCode === TAB) {
      this.close();
    } else if (keyCode === ESCAPE && !hasModifierKey(event)) {
      event.preventDefault();
      this.close();
    } else if (keyCode === ENTER) {
      event.preventDefault();

      if (this._keyManager.activeItem) {
        this._selectValue(this._keyManager.activeItem.value() ?? '');
      } else {
        this.close();
      }
    } else {
      const previousActive = this._keyManager.activeItem;
      this._keyManager.onKeydown(event);
      const currentActive = this._keyManager.activeItem;

      if (currentActive && currentActive !== previousActive) {
        scrollOptionIntoView(currentActive, 'nearest');
      }
    }
  }

  /** Sets up the logic that updates the timepicker when the locale changes. */
  private _handleLocaleChanges(): void {
    // Re-generate the options list if the locale changes.
    // this._localeChanges = this._dateAdapter.localeChanges.subscribe(() => {
    //   this._optionsCacheKey = null;
    //   if (this.isOpen()) {
    //     this._generateOptions();
    //   }
    // });
  }

  /**
   * Sets up the logic that updates the timepicker when the state of the connected input changes.
   */
  private _handleInputStateChanges(): void {
    effect(() => {
      const input = this._input();
      const options = this._options();

      if (this._isOpen() && input) {
        this._syncSelectedState(input.nativeElement.value, options, null);
      }
    });
  }
}

/**
 * Scrolls an option into view.
 * @param option Option to be scrolled into view.
 * @param position Position to which to align the option relative to the scrollable container.
 */
function scrollOptionIntoView(option: ScTimeOption, position: ScrollLogicalPosition) {
  option._getHostElement().scrollIntoView({ block: position, inline: position });
}
