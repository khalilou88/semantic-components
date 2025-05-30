import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  ViewEncapsulation,
  booleanAttribute,
  computed,
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

import { ScCalendarHeader } from '../calendar/calendar-header';
import { generateCalendarDays } from '../calendar/calendar-utils';
import { ScMonthSelector } from '../calendar/month-selector';
import { getLocalizedDayNames } from '../calendar/utils';
import { ScYearSelector } from '../calendar/year-selector';
import { ScCard, ScCardContent, ScCardHeader } from '../card';
import { ScDaysSelector } from './days-selector';
import { ScRange } from './types';

@Component({
  selector: 'sc-range-calendar',
  imports: [
    ScYearSelector,
    ScMonthSelector,
    ScDaysSelector,
    ScCard,
    ScCardHeader,
    ScCardContent,
    ScCalendarHeader,
  ],
  template: `
    <div sc-card>
      <div sc-card-header>
        <sc-calendar-header
          [currentMonth]="currentMonth()"
          [view]="view()"
          (monthYearChange)="setMonthYear($event)"
          (viewToggled)="toggleView()"
        />
      </div>
      <div sc-card-content>
        @switch (view()) {
          @case ('years') {
            <sc-year-selector
              [currentYear]="currentYear()"
              [previewYear]="previewYear()"
              (yearSelected)="selectYear($event)"
            />
          }
          @case ('months') {
            <sc-month-selector
              [currentMonth]="currentMonth()"
              (monthSelected)="selectMonth($event)"
            />
          }
          @default {
            <sc-days-selector
              [weekdays]="weekdays"
              [selectedRange]="value()"
              [calendarDays]="calendarDays()"
              (rangeSelected)="selectRange($event)"
            />
          }
        }
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
    // '(keydown)': 'handleKeydown($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScRangeCalendar),
      multi: true,
    },
  ],
})
export class ScRangeCalendar implements ControlValueAccessor {
  readonly value = model<ScRange>();

  readonly minDate = input<Temporal.PlainDate>();
  readonly maxDate = input<Temporal.PlainDate>();

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  private readonly today = signal(Temporal.Now.plainDateISO());

  protected readonly focusedDate = linkedSignal(() => {
    if (this.value()) {
      return this.value();
    } else {
      return this.today();
    }
  });

  protected readonly currentYear = linkedSignal(() => {
    if (this.value()) {
      return this.value()!.start.year;
    } else {
      return this.today().year;
    }
  });

  protected readonly previewYear = linkedSignal(() => {
    return this.currentYear();
  });

  protected readonly currentMonth = linkedSignal(() => {
    if (this.value()) {
      return this.value()!.start.toPlainYearMonth();
    } else {
      return this.today().toPlainYearMonth();
    }
  });

  private readonly firstDayOfMonth = computed(() =>
    this.currentMonth().toPlainDate({
      day: 1,
    }),
  );

  private readonly lastDayOfMonth = computed(() =>
    this.currentMonth().toPlainDate({
      day: this.currentMonth().daysInMonth,
    }),
  );

  private readonly localeId = inject(LOCALE_ID);

  protected readonly calendarDays = generateCalendarDays(this.localeId, this.currentMonth);

  // Helper methods
  isToday(date: Temporal.PlainDate): boolean {
    const today = Temporal.Now.plainDateISO();
    return date.equals(today);
  }

  isDateDisabled(date: Temporal.PlainDate): boolean {
    if (this.minDate() && Temporal.PlainDate.compare(date, this.minDate()!) < 0) {
      return true;
    }
    if (this.maxDate() && Temporal.PlainDate.compare(date, this.maxDate()!) > 0) {
      return true;
    }
    return false;
  }

  selectRange(range: ScRange): void {
    // if (this.isDateDisabled(date)) return;

    this.value.set(range);

    this.onChange(range);
    this.onTouched();
  }

  // Move focus in the calendar grid with support for month navigation
  // moveFocus(delta: number): void {
  //   let newDate;

  //   if (Math.sign(delta) === 1) {
  //     newDate = this.focusedDate()?.add({ days: delta });
  //   }

  //   if (Math.sign(delta) === -1) {
  //     newDate = this.focusedDate()?.subtract({ days: Math.abs(delta) });
  //   }

  //   if (!newDate) {
  //     return;
  //   }

  //   if (Temporal.PlainDate.compare(newDate, this.calendarDays()[0].date) < 0) {
  //     this.prevMonth();
  //   }

  //   if (
  //     Temporal.PlainDate.compare(
  //       newDate,
  //       this.calendarDays()[this.calendarDays().length - 1].date,
  //     ) > 0
  //   ) {
  //     this.nextMonth();
  //   }

  //   this.focusedDate.set(newDate);
  // }

  // handleKeydown(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveFocus(-1);
  //       event.preventDefault();
  //       break;
  //     case 'ArrowRight':
  //       this.moveFocus(1);
  //       event.preventDefault();
  //       break;
  //     case 'ArrowUp':
  //       this.moveFocus(-7);
  //       event.preventDefault();
  //       break;
  //     case 'ArrowDown':
  //       this.moveFocus(7);
  //       event.preventDefault();
  //       break;
  //     case 'Enter':
  //     case ' ':
  //       if (
  //         Temporal.PlainDate.compare(this.focusedDate()!, this.calendarDays()[0].date) >= 0 &&
  //         Temporal.PlainDate.compare(
  //           this.focusedDate()!,
  //           this.calendarDays()[this.calendarDays().length - 1].date,
  //         ) <= 0
  //       ) {
  //         this.selectDate(this.focusedDate()!);
  //         event.preventDefault();
  //       }
  //       break;
  //     case 'Home':
  //       // Move to first day of the month

  //       this.focusedDate.set(this.firstDayOfMonth());

  //       event.preventDefault();
  //       break;

  //     case 'End':
  //       // Move to last day of the month
  //       this.focusedDate.set(this.lastDayOfMonth());
  //       event.preventDefault();
  //       break;
  //     case 'PageUp':
  //       // Previous month
  //       this.prevMonth();
  //       event.preventDefault();
  //       break;
  //     case 'PageDown':
  //       // Next month
  //       this.nextMonth();
  //       event.preventDefault();
  //       break;
  //   }
  // }

  // Navigation methods
  prevMonth(): void {
    if (this.currentMonth()) {
      this.currentMonth.update((currentMonth) => currentMonth.subtract({ months: 1 }));
    }
  }

  nextMonth(): void {
    if (this.currentMonth()) {
      this.currentMonth.update((currentMonth) => currentMonth.add({ months: 1 }));
    }
  }

  protected readonly view = signal<'days' | 'years' | 'months'>('days');

  protected toggleView(): void {
    if (this.view() === 'days') {
      this.view.set('years');
    } else if (this.view() === 'years') {
      this.view.set('months');
    } else {
      this.view.set('days');
    }
  }

  weekdays: string[] = getLocalizedDayNames(this.localeId);

  protected setMonthYear(n: number) {
    if (this.view() === 'years') {
      this.previewYear.update((value) => value + n * 20);
    }

    if (this.view() === 'days') {
      if (n === 1) {
        this.nextMonth();
      }

      if (n === -1) {
        this.prevMonth();
      }
    }
  }

  protected selectYear(year: number) {
    this.currentYear.set(year);
    this.currentMonth.update((month) =>
      Temporal.PlainYearMonth.from({ year: year, month: month.month }),
    );
    this.value.set(undefined);
    this.toggleView();
  }

  protected selectMonth(month: Temporal.PlainYearMonth) {
    this.currentMonth.set(month);
    this.toggleView();
  }

  //CVA
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: ScRange) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  writeValue(value: ScRange): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: ScRange) => void): void {
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
