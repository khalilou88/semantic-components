import { Directionality } from '@angular/cdk/bidi';
import { ESCAPE, TAB, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-select',
  imports: [SvgChevronDownIcon, OverlayModule],
  template: `
    <button
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      #scSelectTrigger
      [disabled]="isDisabled()"
      [attr.aria-expanded]="_isExpanded()"
      [attr.aria-controls]="_getPanelId()"
      (click)="open()"
      type="button"
      role="combobox"
    >
      {{ label() }}
      <svg-chevron-down-icon class="size-4 opacity-50" />
    </button>

    <ng-template #panelTemplate>
      <div
        class="relative z-50 max-h-96 w-full min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        [id]="_getPanelId()"
      >
        <ng-content />
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
  static nextId = 0;

  id: number = 0;

  _getPanelId() {
    return `panel-${this.id}`;
  }
  private readonly _cdr = inject(ChangeDetectorRef);

  state = inject(ScSelectState);

  _overlay = inject(Overlay);
  _dir = inject(Directionality, { optional: true });
  _viewContainerRef = inject(ViewContainerRef);

  private _portal: TemplatePortal<unknown> | null = null;

  scSelectTrigger = viewChild.required<ElementRef<HTMLButtonElement>>('scSelectTrigger');

  _panelTemplate = viewChild.required<TemplateRef<unknown>>('panelTemplate');

  placeholder = input<string>('');

  constructor() {
    this.id = ++ScSelect.nextId;

    effect(() => {
      const selectedValue = this.state.selectedValue();
      this.setValue(selectedValue);

      const closeOverlay = this.state.closeOverlay();

      if (closeOverlay) {
        this.close();

        this.state.closeOverlay.set(false);
      }
    });
  }

  _value = signal('');

  isDisabled = signal(false);

  writeValue(value: string): void {
    this._value.set(value);
  }

  setValue(value: string) {
    this._value.set(value);
    this._onChange(value);
    this._cdr.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onTouched: () => void = () => {};

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  label = computed(() => {
    if (this.state.selectedLabel()) {
      return this.state.selectedLabel();
    }

    return this.placeholder();
  });

  _isExpanded = computed(() => {
    return this.state.isOpen();
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
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
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
    if (this.state.isOpen()) {
      return;
    }

    this.state.isOpen.set(true);

    const overlayRef = this._getOverlayRef();

    overlayRef.updateSize({ width: this.scSelectTrigger().nativeElement.offsetWidth });
    this._portal ??= new TemplatePortal(this._panelTemplate(), this._viewContainerRef);
    overlayRef.attach(this._portal);
  }

  close(): void {
    if (this.state.isOpen()) {
      this.state.isOpen.set(false);
      this._overlayRef?.detach();
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
    }

    //TODO handle keyCode === ENTER and other cases
  }
}
