import { Directionality } from '@angular/cdk/bidi';
import { ENTER, ESCAPE, TAB, hasModifierKey } from '@angular/cdk/keycodes';
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

import { ScOptionModel } from './option-model';
import { ScSelectListbox } from './select-listbox';
import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-select',
  imports: [SvgChevronDownIcon, OverlayModule, ScSelectListbox],
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
      <sc-select-listbox [options]="options()" />
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

  id = 0;

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

  options = input<ScOptionModel[]>([]);

  isOpen = signal<boolean>(false);

  constructor() {
    this.id = ++ScSelect.nextId;

    effect(() => {
      const selectedValue = this.state.selectedOption();
      this.setValue(selectedValue);
    });
  }

  _value = signal<ScOptionModel | undefined>(undefined);

  isDisabled = signal(false);

  writeValue(value: ScOptionModel): void {
    this._value.set(value);
  }

  setValue(value: ScOptionModel | undefined) {
    this._value.set(value);
    this._onChange(value);
    this._cdr.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onChange: (value: ScOptionModel | undefined) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onTouched: () => void = () => {};

  registerOnChange(fn: (value: ScOptionModel | undefined) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  label = computed(() => {
    if (this.state.selectedOption()) {
      return this.state.selectedOption()?.label;
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
    const keyCode = event.keyCode;

    if (keyCode === TAB) {
      this.close();
    } else if (keyCode === ESCAPE && !hasModifierKey(event)) {
      event.preventDefault();
      this.close();
    } else if (keyCode === ENTER) {
      //TODO for me it's mean it's was selected
      this.close();
    }
  }
}
