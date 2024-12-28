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
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

import { ScOption } from './option';
import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-select',
  imports: [SvgChevronDownIcon],
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
      <ul
        class="relative z-50 max-h-96 w-full min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
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
    ScSelectState,
  ],
})
export class ScSelect implements ControlValueAccessor {
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

  private readonly state = inject(ScSelectState);

  selectedValue = computed(() => this.state.selectedValue());

  constructor() {
    effect(() => {
      if (this.state.selectedValue() === undefined) {
        this.state.selectedValue.set(this.value());
      }
    });

    effect(() => {
      if (this.state.selectedValue() && this.value() !== this.state.selectedValue()) {
        this.setValue(this.selectedValue());
      }
    });

    effect(() => {
      const option = this.options().find((element) => element.value() === this.value());

      if (option) {
        this.keyManager.setActiveItem(option);
        this.scrollOptionIntoView(option, 'center');
      } else if (this.options().length > 0) {
        this.keyManager.setActiveItem(this.options()[0]);
        this.scrollOptionIntoView(this.options()[0], 'center');
      }
    });
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

    overlayRef.updateSize({ width: this.scSelectTrigger().nativeElement.offsetWidth });
    this._portal ??= new TemplatePortal(this._panelTemplate(), this._viewContainerRef);
    overlayRef.attach(this._portal);
  }

  close(): void {
    if (this.isOpen()) {
      this.isOpen.set(false);
      this._overlayRef?.detach();
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
