import { ActiveDescendantKeyManager, _IdGenerator } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  model,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SvgChevronDownIcon, SvgChevronUpIcon } from '@semantic-icons/lucide-icons';

import { ScOption } from './option';
import { ScSelectContent } from './select-content';
import { ScSelectScrollDown } from './select-scroll-down';
import { ScSelectScrollUp } from './select-scroll-up';
import { ScSelectState } from './select-state';
import { ScSelectViewport } from './select-viewport';

@Component({
  selector: 'sc-select',
  imports: [
    SvgChevronDownIcon,
    ScSelectContent,
    ScSelectViewport,
    ScSelectScrollUp,
    ScSelectScrollDown,
    SvgChevronUpIcon,
  ],
  template: `
    <button
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      #scSelectTrigger
      [disabled]="isDisabled()"
      [attr.aria-expanded]="_isExpanded()"
      [attr.aria-controls]="panelId"
      (click)="open()"
      type="button"
      role="combobox"
    >
      {{ label() }}
      <svg-chevron-down-icon class="size-4 opacity-50" />
    </button>

    <ng-template #panelTemplate>
      <div [id]="panelId" sc-select-content role="listbox">
        <button sc-select-scroll-up type="button">
          <svg-chevron-up-icon class="h-4 w-4" />
        </button>
        <div sc-select-viewport>
          <ng-content />
        </div>
        <button sc-select-scroll-down type="button">
          <svg-chevron-down-icon class="h-4 w-4" />
        </button>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScSelect),
      multi: true,
    },
    ScSelectState,
  ],
})
export class ScSelect implements ControlValueAccessor {
  private readonly state = inject(ScSelectState);

  protected readonly panelId: string = inject(_IdGenerator).getId('sc-select-panel-');

  private readonly _cdr = inject(ChangeDetectorRef);

  _overlay = inject(Overlay);
  _dir = inject(Directionality, { optional: true });
  _viewContainerRef = inject(ViewContainerRef);

  private _portal: TemplatePortal<unknown> | null = null;

  scSelectTrigger = viewChild.required<ElementRef<HTMLButtonElement>>('scSelectTrigger');

  _panelTemplate = viewChild.required<TemplateRef<unknown>>('panelTemplate');

  placeholder = input<string>('');

  isOpen = signal<boolean>(false);

  options = contentChildren(ScOption);

  private readonly activeDescendant = signal<string | null>(null);

  constructor() {
    effect(() => {
      //init
      if (this.state.value() === undefined) {
        this.state.value.set(this.value());
      }
    });

    effect(() => {
      if (this.value() !== this.state.value()) {
        this.setValue(this.state.value());
      }
    });

    effect(() => {
      this.syncSelectedState(this.value(), this.options(), this.options()[0]);
    });

    this.keyManager.change.subscribe(() =>
      this.activeDescendant.set(this.keyManager.activeItem?.id() ?? null),
    );
  }

  /**
   * Scrolls an option into view.
   * @param option Option to be scrolled into view.
   * @param position Position to which to align the option relative to the scrollable container.
   */
  scrollOptionIntoView(option: ScOption, position: ScrollLogicalPosition) {
    option.getHostElement().scrollIntoView({ block: position, inline: position });
  }

  private readonly injector = inject(Injector);
  private readonly keyManager = new ActiveDescendantKeyManager(this.options, this.injector)
    .withHomeAndEnd(true)
    .withPageUpDown(true)
    .withVerticalOrientation(true);

  readonly value = model<unknown>(undefined);

  isDisabled = signal(false);

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  setValue(value: unknown) {
    this.value.set(value);
    this._onChange(value);
    this._cdr.markForCheck();
    this.close();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onChange: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onTouched: () => void = () => {};

  registerOnChange(fn: (value: unknown) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  label = computed(() => {
    if (this.value()) {
      return this.options()
        .find((element) => element.value() === this.value())
        ?.label();
    }

    return this.placeholder();
  });

  _isExpanded = computed(() => {
    return this.isOpen();
  });

  private _overlayRef: OverlayRef | null = null;

  private _getOverlayRef(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this.scSelectTrigger())
      .withFlexibleDimensions(false)
      .withPush(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 8,
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -8,
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
      const origin = this.scSelectTrigger().nativeElement;

      if (target && target !== origin && !origin.contains(target)) {
        this.close();
      }
    });

    return this._overlayRef;
  }

  open(): void {
    if (this.isOpen()) {
      return;
    }

    this.isOpen.set(true);

    const overlayRef = this._getOverlayRef();

    overlayRef.updateSize({
      width: this.scSelectTrigger().nativeElement.offsetWidth,
      maxHeight: '384px',
    });
    this._portal ??= new TemplatePortal(this._panelTemplate(), this._viewContainerRef);
    overlayRef.attach(this._portal);
  }

  close(): void {
    if (this.isOpen()) {
      this.focusOnTrigger();
      this.isOpen.set(false);
      this._overlayRef?.detach();
    }
  }

  focusOnTrigger() {
    this.scSelectTrigger().nativeElement.focus();
  }

  /**
   * Synchronizes the internal state of the component based on a specific selected date.
   * @param value Currently selected date.
   * @param options Options rendered out in the timepicker.
   * @param fallback Option to set as active if no option is selected.
   */
  private syncSelectedState(
    value: unknown,
    options: readonly ScOption[],
    fallback: ScOption | null,
  ): void {
    let hasSelected = false;

    for (const option of options) {
      if (value && option.value() === value) {
        this.scrollOptionIntoView(option, 'center');
        untracked(() => this.keyManager.setActiveItem(option));
        hasSelected = true;
      }
    }

    // If no option was selected, we need to reset the key manager since
    // it might be holding onto an option that no longer exists.
    if (!hasSelected) {
      if (fallback) {
        untracked(() => this.keyManager.setActiveItem(fallback));
        this.scrollOptionIntoView(fallback, 'center');
      } else {
        untracked(() => this.keyManager.setActiveItem(-1));
      }
    }
  }

  /** Handles keyboard events while the overlay is open. */
  private _handleKeydown(event: KeyboardEvent): void {
    const key = event.key;

    if (key === 'Tab') {
      this.close();
    } else if (key === 'Escape' && !hasModifierKey(event)) {
      event.preventDefault();
      this.close();
    } else if (key === 'Enter') {
      event.preventDefault();

      if (this.keyManager.activeItem) {
        this.setValue(this.keyManager.activeItem.value() ?? '');
      } else {
        this.close();
      }
    } else {
      const previousActive = this.keyManager.activeItem;
      this.keyManager.onKeydown(event);
      const currentActive = this.keyManager.activeItem;

      if (currentActive && currentActive !== previousActive) {
        this.scrollOptionIntoView(currentActive, 'nearest');
      }
    }
  }
}
