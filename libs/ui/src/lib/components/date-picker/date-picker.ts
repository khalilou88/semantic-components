import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  OutputEmitterRef,
  ViewEncapsulation,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCalendarIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScCalendar } from '../calendar';
import { ScInput } from '../input';
import { ScDateInput } from './date-input';

@Component({
  selector: 'sc-date-picker',
  imports: [ScInput, SiCalendarIcon, ScButton, ScDateInput],
  template: `
    <button class="absolute inset-y-0 end-0 pe-4" (click)="open()" sc-button variant="ghost">
      <svg si-calendar-icon></svg>
    </button>
    <input #input sc-input scDateInput type="text" placeholder="Select date" />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDatePicker {
  class = input<string>('');

  classes = computed(() => cn('flex relative', this.class()));

  private readonly host = inject(ElementRef);

  private readonly _injector = inject(Injector);

  private readonly _dir = inject(Directionality, { optional: true });
  private readonly _overlay = inject(Overlay);

  private readonly _isOpen = signal(false);
  private readonly _input = viewChild<ElementRef<HTMLInputElement>>('input');
  // private readonly _overlayOrigin = viewChild<ElementRef<HTMLDivElement>>('overlayOrigin');
  private _overlayRef: OverlayRef | null = null;
  private _portal: ComponentPortal<unknown> | null = null;

  /** Emits when the datepicker is opened. */
  readonly opened: OutputEmitterRef<void> = output();
  /** Emits when the datepicker is closed. */
  readonly closed: OutputEmitterRef<void> = output();

  /** Emits when the user selects a date. */
  readonly selected: OutputEmitterRef<string> = output();

  /** Opens the datepicker. */
  open(): void {
    if (!this._input) {
      return;
    }

    // Focus should already be on the input, but this call is in case the datepicker is opened
    // programmatically. We need to call this even if the datepicker is already open, because
    // the user might be clicking the toggle.
    //TODO
    // this._input()?.nativeElement.focus();

    if (this._isOpen()) {
      return;
    }

    this._isOpen.set(true);

    const overlayRef = this._getOverlayRef();

    //overlayRef.updateSize({ width: this._overlayOrigin()?.nativeElement.offsetWidth });

    overlayRef.updateSize({ width: 400 });

    this._portal ??= new ComponentPortal(ScCalendar);

    overlayRef.attach(this._portal);

    this.opened.emit();
  }

  /** Closes the datepicker. */
  close(): void {
    if (this._isOpen()) {
      this._isOpen.set(false);
      this._overlayRef?.detach();
      this.closed.emit();
    }
  }

  /** Creates an overlay reference for the datepicker panel. */
  private _getOverlayRef(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }

    const _overlayOrigin = this.host;
    if (_overlayOrigin === undefined) {
      throw new Error('_overlayOrigin is undefined');
    }

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(_overlayOrigin)
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

    this._overlayRef = this._overlay.create({
      positionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._dir || 'ltr',
      hasBackdrop: false,
    });

    this._overlayRef.keydownEvents().subscribe((event) => {
      console.log(event);
    });

    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const target = _getEventTarget(event) as HTMLElement;
      const origin = this.host?.nativeElement;

      if (target && target !== origin && !origin?.contains(target)) {
        this.close();
      }
    });

    return this._overlayRef;
  }

  /** Selects a specific date value. */
  protected _selectValue(value: string) {
    this.close();
    this.selected.emit(value);
    this._input()?.nativeElement.focus();
  }
}
