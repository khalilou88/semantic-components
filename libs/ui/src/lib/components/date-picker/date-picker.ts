import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  LOCALE_ID,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Temporal } from '@js-temporal/polyfill';
import { cn } from '@semantic-components/utils';

import { ScCalendar } from '../calendar';
import { ScInput } from '../input';
import { ScDatePickerToggle } from './date-picker-toggle';

@Component({
  selector: 'sc-date-picker',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScDatePicker),
      multi: true,
    },
  ],
})
export class ScDatePicker implements ControlValueAccessor {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('flex relative', this.classInput()));

  readonly value = model<Temporal.PlainDate>();
  readonly minDate = input<Temporal.PlainDate>();
  readonly maxDate = input<Temporal.PlainDate>();

  private readonly localeId = inject(LOCALE_ID);

  private readonly host = inject(ElementRef);

  private readonly dir = inject(Directionality, { optional: true });
  private readonly overlay = inject(Overlay);

  private readonly isOpen = signal(false);

  private overlayRef: OverlayRef | null = null;
  private portal: ComponentPortal<unknown> | null = null;

  private readonly scDatePickerToggle = contentChild(ScDatePickerToggle);
  private readonly scInput = contentChild(ScInput);

  constructor() {
    afterNextRender(() => {
      this.scDatePickerToggle()?.toggled.subscribe(() => {
        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      });
    });
  }

  /** Opens the datepicker. */
  open(): void {
    if (!this.scInput()) {
      return;
    }

    // Focus should already be on the input, but this call is in case the datepicker is opened
    // programmatically. We need to call this even if the datepicker is already open, because
    // the user might be clicking the toggle.
    this.scInput()?.nativeElement.focus();

    if (this.isOpen()) {
      return;
    }

    this.isOpen.set(true);

    const overlayRef = this.getOverlayRef();

    //overlayRef.updateSize({ width: this._overlayOrigin()?.nativeElement.offsetWidth });

    overlayRef.updateSize({ width: 400 });

    this.portal ??= new ComponentPortal(ScCalendar);

    const componentRef = overlayRef.attach(this.portal);

    (componentRef.instance as ScCalendar).value.subscribe((v) => {
      if (v) {
        this.selectValue(v);
      }
    });
  }

  /** Closes the datepicker. */
  close(): void {
    if (this.isOpen()) {
      this.isOpen.set(false);
      this.overlayRef?.detach();
    }
  }

  /** Creates an overlay reference for the datepicker panel. */
  private getOverlayRef(): OverlayRef {
    if (this.overlayRef) {
      return this.overlayRef;
    }

    const overlayOrigin = this.host;
    if (overlayOrigin === undefined) {
      throw new Error('_overlayOrigin is undefined');
    }

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(overlayOrigin)
      .withFlexibleDimensions(false)
      .withPush(false)
      // .withTransformOriginOn('.mat-datepicker-panel')
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
          //panelClass: 'mat-datepicker-above',
        },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this.dir || 'ltr',
      hasBackdrop: false,
    });

    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });

    this.overlayRef.outsidePointerEvents().subscribe((event) => {
      const target = _getEventTarget(event) as HTMLElement;
      const origin = this.host?.nativeElement;

      if (target && target !== origin && !origin?.contains(target)) {
        this.close();
      }
    });

    return this.overlayRef;
  }

  /** Selects a specific date value. */
  protected selectValue(value: Temporal.PlainDate) {
    this.close();

    this.value.set(value);

    console.log(value?.toLocaleString(this.localeId));

    this.scInput()?.value.set(value?.toLocaleString(this.localeId) ?? '');

    this.onChange(value);
    this.onTouched();

    this.scInput()?.nativeElement.focus();
  }

  //CVA
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: Temporal.PlainDate) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  writeValue(value: Temporal.PlainDate): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: Temporal.PlainDate) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = linkedSignal(() => this.disabledInput());

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
