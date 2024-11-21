import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { ENTER, ESCAPE, TAB, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { ComponentPortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Injector,
  LOCALE_ID,
  OnInit,
  OutputEmitterRef,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';

import { InlineDatePickerComponent } from './inline-date-picker.component';

@Component({
  selector: 'sc-date-picker',
  standalone: true,
  imports: [CommonModule, InlineDatePickerComponent],
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
export class DatePickerComponent implements OnInit {
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
  private readonly _viewContainerRef = inject(ViewContainerRef);
  private readonly _dir = inject(Directionality, { optional: true });
  private readonly _overlay = inject(Overlay);

  private readonly _isOpen = signal(false);
  private readonly _input = viewChild<ElementRef<HTMLInputElement>>('input');
  private readonly _overlayOrigin = viewChild<ElementRef<HTMLDivElement>>('overlayOrigin');
  private _overlayRef: OverlayRef | null = null;

  /** Emits when the timepicker is opened. */
  readonly opened: OutputEmitterRef<void> = output();
  /** Emits when the timepicker is closed. */
  readonly closed: OutputEmitterRef<void> = output();

  private _portal: ComponentPortal<unknown> | null = null;

  /** Opens the timepicker. */
  open(): void {
    if (!this._input) {
      return;
    }

    // Focus should already be on the input, but this call is in case the timepicker is opened
    // programmatically. We need to call this even if the timepicker is already open, because
    // the user might be clicking the toggle.
    this._input()!.nativeElement.focus();

    if (this._isOpen()) {
      return;
    }

    this._isOpen.set(true);
    //this._generateOptions();
    const overlayRef = this._getOverlayRef();

    overlayRef.updateSize({ width: this._overlayOrigin()!.nativeElement.offsetWidth });

    this._portal ??= new ComponentPortal(InlineDatePickerComponent);

    overlayRef.attach(this._portal);
    // this._onOpenRender?.destroy();
    // this._onOpenRender = afterNextRender(
    //   () => {
    //     const options = this._options();
    //     this._syncSelectedState(this._input.value(), options, options[0]);
    //     this._onOpenRender = null;
    //   },
    //   { injector: this._injector },
    // );

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

  /** Creates an overlay reference for the timepicker panel. */
  private _getOverlayRef(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._overlayOrigin()!)
      .withFlexibleDimensions(false)
      .withPush(false)
      .withTransformOriginOn('.mat-timepicker-panel')
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
          panelClass: 'mat-timepicker-above',
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
      const origin = this._overlayOrigin()!.nativeElement;

      if (target && target !== origin && !origin.contains(target)) {
        this.close();
      }
    });

    return this._overlayRef;
  }

  /** Emits when the user selects a time. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly selected: OutputEmitterRef<any> = output();

  /** Selects a specific time value. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected _selectValue(value: any) {
    this.close();
    this.selected.emit({ value, source: this });
    this._input()?.nativeElement.focus();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected _options = {} as any;

  private readonly _keyManager = new ActiveDescendantKeyManager(this._options, this._injector)
    .withHomeAndEnd(true)
    .withPageUpDown(true)
    .withVerticalOrientation(true);

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
        //this._selectValue(this._keyManager.activeItem.value);
        console.log('here');
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
}

/**
 * Scrolls an option into view.
 * @param option Option to be scrolled into view.
 * @param position Position to which to align the option relative to the scrollable container.
 */
//TODO
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function scrollOptionIntoView(option: any, position: ScrollLogicalPosition) {
  option._getHostElement().scrollIntoView({ block: position, inline: position });
}
