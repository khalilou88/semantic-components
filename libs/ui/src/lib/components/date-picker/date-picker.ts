import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Injector,
  LOCALE_ID,
  OnInit,
  OutputEmitterRef,
  ViewEncapsulation,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';

import { ScInlineDatePicker } from './inline-date-picker';

@Component({
  selector: 'sc-date-picker',
  imports: [],
  template: `
    <div class="relative max-w-sm" #overlayOrigin>
      <button class="absolute inset-y-0 end-0 flex items-center pe-3.5" (click)="open()">
        <svg
          class="size-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </button>
      <input
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        #input
        type="text"
        placeholder="Select date"
      />
    </div>
    {{ dateFormatPattern() }}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDatePicker implements OnInit {
  dateFormatPattern = signal<string>('');

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit() {
    this.dateFormatPattern.set(this.getDateFormatPattern(this.localeId));
  }

  getDateFormatPattern(localeId: string) {
    const getPatternForPart = (part: Intl.DateTimeFormatPart) => {
      switch (part.type) {
        case 'day':
          return 'd'.repeat(part.value.length);
        case 'month':
          return 'M'.repeat(part.value.length);
        case 'year':
          return 'y'.repeat(part.value.length);
        case 'literal':
          return part.value;
        default:
          throw new Error('no default');
      }
    };

    return new Intl.DateTimeFormat(localeId)
      .formatToParts(new Date('2022-01-01'))
      .map(getPatternForPart)
      .join('');
  }

  private readonly _injector = inject(Injector);

  private readonly _dir = inject(Directionality, { optional: true });
  private readonly _overlay = inject(Overlay);

  private readonly _isOpen = signal(false);
  private readonly _input = viewChild<ElementRef<HTMLInputElement>>('input');
  private readonly _overlayOrigin = viewChild<ElementRef<HTMLDivElement>>('overlayOrigin');
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
    this._input()?.nativeElement.focus();

    if (this._isOpen()) {
      return;
    }

    this._isOpen.set(true);

    const overlayRef = this._getOverlayRef();

    overlayRef.updateSize({ width: this._overlayOrigin()?.nativeElement.offsetWidth });

    this._portal ??= new ComponentPortal(ScInlineDatePicker);

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

    const _overlayOrigin = this._overlayOrigin();
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
      const origin = this._overlayOrigin()?.nativeElement;

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
