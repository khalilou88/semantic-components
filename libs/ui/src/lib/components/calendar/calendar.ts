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

import { ScCard, ScCardContent, ScCardHeader } from '../card';
import { ScCalendarHeader } from './calendar-header';
import { generateCalendarDays } from './calendar-utils';
import { CalendarService } from './calendar.service';
import { ScDaySelector } from './day-selector';
import { ScMonthSelector } from './month-selector';
import { View } from './types';
import { getLocalizedDayNames } from './utils';
import { ScYearSelector } from './year-selector';

@Component({
  selector: 'sc-calendar',
  imports: [
    ScYearSelector,
    ScMonthSelector,
    ScDaySelector,
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
            <sc-day-selector
              [weekdays]="weekdays"
              [focusedDate]="focusedDate()"
              [selectedDate]="value()"
              [calendarDays]="calendarDays()"
              (dateSelected)="selectDate($event)"
            />
          }
        }
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
    '(keydown)': 'handleKeydown($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScCalendar),
      multi: true,
    },
    CalendarService,
  ],
})
export class ScCalendar implements ControlValueAccessor {
  readonly value = model<Temporal.PlainDate>();
  readonly min = input<Temporal.PlainDate>();
  readonly max = input<Temporal.PlainDate>();

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block w-84', this.classInput()));

  private readonly today = signal(Temporal.Now.plainDateISO());

  protected readonly date = computed(() => {
    if (this.value()) {
      return this.value();
    } else {
      return this.today();
    }
  });

  //if date is in the current month else focus first date of the current month
  protected readonly focusedDate = linkedSignal(() => {
    if (
      this.date()?.year === this.currentMonth().year &&
      this.date()?.month === this.currentMonth().month
    ) {
      return this.date();
    }

    return new Temporal.PlainDate(this.currentMonth().year, this.currentMonth().month, 1);
  });

  protected readonly currentYear = linkedSignal(() => {
    return this.date()!.year;
  });

  protected readonly previewYear = linkedSignal(() => {
    return this.currentYear();
  });

  protected readonly currentMonth = linkedSignal(() => {
    return this.date()!.toPlainYearMonth();
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
    if (this.min() && Temporal.PlainDate.compare(date, this.min()!) < 0) {
      return true;
    }
    if (this.max() && Temporal.PlainDate.compare(date, this.max()!) > 0) {
      return true;
    }
    return false;
  }

  selectDate(date: Temporal.PlainDate): void {
    if (this.isDateDisabled(date)) return;

    this.value.set(date);

    this.onChange(date);
    this.onTouched();
  }

  // Move focus in the calendar grid with support for month navigation
  moveFocus(delta: number): void {
    let newDate;

    if (Math.sign(delta) === 1) {
      newDate = this.focusedDate()?.add({ days: delta });
    }

    if (Math.sign(delta) === -1) {
      newDate = this.focusedDate()?.subtract({ days: Math.abs(delta) });
    }

    if (!newDate) {
      return;
    }

    if (Temporal.PlainDate.compare(newDate, this.calendarDays()[0].date) < 0) {
      this.prevMonth();
    }

    if (
      Temporal.PlainDate.compare(
        newDate,
        this.calendarDays()[this.calendarDays().length - 1].date,
      ) > 0
    ) {
      this.nextMonth();
    }

    this.focusedDate.set(newDate);
  }

  handleKeydown(event: KeyboardEvent): void {
    if (this.view() === 'days') {
      this.handleKeydown1(event);
    }

    if (this.view() === 'years') {
      this.handleKeydown2(event);
    }

    if (this.view() === 'months') {
      this.handleKeydown3(event);
    }
  }

  handleKeydown2(event: KeyboardEvent): void {
    console.log(event);
  }

  handleKeydown3(event: KeyboardEvent): void {
    console.log(event);
  }

  handleKeydown1(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.moveFocus(-1);
        event.preventDefault();
        break;
      case 'ArrowRight':
        this.moveFocus(1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.moveFocus(-7);
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.moveFocus(7);
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
        if (
          Temporal.PlainDate.compare(this.focusedDate()!, this.calendarDays()[0].date) >= 0 &&
          Temporal.PlainDate.compare(
            this.focusedDate()!,
            this.calendarDays()[this.calendarDays().length - 1].date,
          ) <= 0
        ) {
          this.selectDate(this.focusedDate()!);
          event.preventDefault();
        }
        break;
      case 'Home':
        // Move to first day of the month

        this.focusedDate.set(this.firstDayOfMonth());

        event.preventDefault();
        break;

      case 'End':
        // Move to last day of the month
        this.focusedDate.set(this.lastDayOfMonth());
        event.preventDefault();
        break;
      case 'PageUp':
        // Previous month
        this.prevMonth();
        event.preventDefault();
        break;
      case 'PageDown':
        // Next month
        this.nextMonth();
        event.preventDefault();
        break;
    }
  }

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

  protected readonly view = signal<View>('days');

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
    this.toggleView();
  }

  protected selectMonth(month: Temporal.PlainYearMonth) {
    this.currentMonth.set(month);
    this.toggleView();
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
