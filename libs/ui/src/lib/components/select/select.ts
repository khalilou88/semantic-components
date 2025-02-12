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
  booleanAttribute,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SiChevronDownIcon } from '@semantic-icons/lucide-icons';

import { ScOption } from './option';

@Component({
  selector: 'sc-select',
  imports: [SiChevronDownIcon],
  template: `
    <button
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      #scSelectTrigger
      [disabled]="disabled()"
      [attr.aria-expanded]="isExpanded()"
      [attr.aria-controls]="panelId"
      (click)="open()"
      type="button"
      role="combobox"
    >
      {{ label() }}
      <svg class="size-4 opacity-50" si-chevron-down-icon></svg>
    </button>

    <ng-template #panelTemplate>
      <ul
        class="relative max-h-96 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        [id]="panelId"
        role="listbox"
      >
        <ng-content />
      </ul>
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
  ],
})
export class ScSelect implements ControlValueAccessor {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly overlay = inject(Overlay);
  private readonly directionality = inject(Directionality, { optional: true });
  private readonly viewContainerRef = inject(ViewContainerRef);
  private portal: TemplatePortal<unknown> | null = null;
  readonly scSelectTrigger = viewChild.required<ElementRef<HTMLButtonElement>>('scSelectTrigger');

  protected readonly panelId: string = inject(_IdGenerator).getId('sc-select-panel-');
  readonly panelTemplate = viewChild.required<TemplateRef<unknown>>('panelTemplate');

  readonly placeholder = input<string>('');

  readonly isOpen = signal<boolean>(false);

  readonly options = contentChildren(ScOption);

  private readonly activeDescendant = signal<string | null>(null);

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = linkedSignal(() => this.disabledInput());

  constructor() {
    effect(() => {
      //TODO scroll into option when the panel is open
      if (this.isOpen()) {
        this.syncSelectedState(this.value(), this.options(), this.options()[0]);
      }
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

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  setValue(value: unknown) {
    this.value.set(value);
    this.onChange(value);
    this.changeDetectorRef.markForCheck();
    this.close();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  label = computed(() => {
    if (this.value()) {
      return this.options()
        .find((element) => element.value() === this.value())
        ?.label();
    }

    return this.placeholder();
  });

  isExpanded = computed(() => {
    return this.isOpen();
  });

  private _overlayRef: OverlayRef | null = null;

  private _getOverlayRef(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }

    const positionStrategy = this.overlay
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

    this._overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this.directionality || 'ltr',
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

    overlayRef.updateSize({ width: this.scSelectTrigger().nativeElement.offsetWidth });
    this.portal ??= new TemplatePortal(this.panelTemplate(), this.viewContainerRef);
    overlayRef.attach(this.portal);
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
