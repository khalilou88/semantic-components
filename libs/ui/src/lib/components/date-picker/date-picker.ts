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

  private readonly injector = inject(Injector);

  private readonly dir = inject(Directionality, { optional: true });
  private readonly overlay = inject(Overlay);

  private readonly isOpen = signal(false);
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');
  // private readonly _overlayOrigin = viewChild<ElementRef<HTMLDivElement>>('overlayOrigin');
  private overlayRef: OverlayRef | null = null;
  private portal: ComponentPortal<unknown> | null = null;

  /** Emits when the datepicker is opened. */
  readonly opened: OutputEmitterRef<void> = output();
  /** Emits when the datepicker is closed. */
  readonly closed: OutputEmitterRef<void> = output();

  /** Emits when the user selects a date. */
  readonly selected: OutputEmitterRef<string> = output();

  /** Opens the datepicker. */
  open(): void {
    if (!this.input) {
      return;
    }

    // Focus should already be on the input, but this call is in case the datepicker is opened
    // programmatically. We need to call this even if the datepicker is already open, because
    // the user might be clicking the toggle.
    //TODO
    // this._input()?.nativeElement.focus();

    if (this.isOpen()) {
      return;
    }

    this.isOpen.set(true);

    const overlayRef = this._getOverlayRef();

    //overlayRef.updateSize({ width: this._overlayOrigin()?.nativeElement.offsetWidth });

    overlayRef.updateSize({ width: 400 });

    this.portal ??= new ComponentPortal(ScCalendar);

    overlayRef.attach(this.portal);

    this.opened.emit();
  }

  /** Closes the datepicker. */
  close(): void {
    if (this.isOpen()) {
      this.isOpen.set(false);
      this.overlayRef?.detach();
      this.closed.emit();
    }
  }

  /** Creates an overlay reference for the datepicker panel. */
  private _getOverlayRef(): OverlayRef {
    if (this.overlayRef) {
      return this.overlayRef;
    }

    const _overlayOrigin = this.host;
    if (_overlayOrigin === undefined) {
      throw new Error('_overlayOrigin is undefined');
    }

    const positionStrategy = this.overlay
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

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this.dir || 'ltr',
      hasBackdrop: false,
    });

    this.overlayRef.keydownEvents().subscribe((event) => {
      console.log(event);
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
  protected _selectValue(value: string) {
    this.close();
    this.selected.emit(value);
    this.input()?.nativeElement.focus();
  }
}
