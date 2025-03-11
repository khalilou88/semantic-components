import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  linkedSignal,
  model,
  signal,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';
import { cn } from '@semantic-components/utils';

import { DaySelector } from './day-selector';
import { MonthSelector } from './month-selector';
import { CalendarDay } from './types';
import { YearSelector } from './year-selector';

@Component({
  selector: 'sc-new-calendar',
  imports: [YearSelector, MonthSelector, DaySelector],
  template: `
    test
    {{ value() }}

    @switch (view()) {
      @case ('years') {
        <sc-year-selector [currentYear]="currentYear()" />
      }
      @case ('months') {
        <sc-month-selector />
      }
      @default {
        <sc-day-selector
          [focusedDate]="focusedDate()"
          [selectedDate]="value()"
          [calendarDays]="calendarDays()"
          (dateSelected)="selectDate($event)"
        />
      }
    }
  `,
  host: {
    '[class]': 'class()',
    '(keydown)': 'handleKeydown($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNewCalendar {
  readonly value = model<Temporal.PlainDate>();
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
      return this.value()!.year;
    } else {
      return this.today().year;
    }
  });

  private readonly currentMonth = linkedSignal(() => {
    if (this.value()) {
      return this.value()!.toPlainYearMonth();
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

  // Generate calendar days for the current month view
  protected readonly calendarDays = computed(() => {
    const days: CalendarDay[] = [];

    const firstDayOfMonth = this.currentMonth().toPlainDate({ day: 1 });

    // Get the day of the week for the first day (0-6, Sunday-Saturday)
    const firstDayOfWeek = firstDayOfMonth.dayOfWeek % 7;

    // Add days from previous month to fill the first week
    const prevMonth = this.currentMonth().subtract({ months: 1 });
    const daysInPrevMonth = prevMonth.daysInMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
      const day = daysInPrevMonth - firstDayOfWeek + i + 1;
      const date = prevMonth.toPlainDate({ day });
      days.push({
        date,
        dayOfMonth: day,
        isInCurrentMonth: false,
        isToday: this.isToday(date),
        isDisabled: this.isDateDisabled(date),
      });
    }

    // Add days of current month
    for (let day = 1; day <= this.currentMonth().daysInMonth; day++) {
      const date = this.currentMonth().toPlainDate({ day });
      days.push({
        date,
        dayOfMonth: day,
        isInCurrentMonth: true,
        isToday: this.isToday(date),
        isDisabled: this.isDateDisabled(date),
      });
    }

    // Add days from next month to complete the grid (always show 6 weeks)
    const daysNeeded = 42 - days.length;
    const nextMonth = this.currentMonth().add({ months: 1 });

    for (let day = 1; day <= daysNeeded; day++) {
      const date = nextMonth.toPlainDate({ day });
      days.push({
        date,
        dayOfMonth: day,
        isInCurrentMonth: false,
        isToday: this.isToday(date),
        isDisabled: this.isDateDisabled(date),
      });
    }

    return days;
  });

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

  selectDate(date: Temporal.PlainDate): void {
    if (this.isDateDisabled(date)) return;

    this.value.set(date);
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

  protected readonly view = signal<'days' | 'years' | 'months'>('days');
}
