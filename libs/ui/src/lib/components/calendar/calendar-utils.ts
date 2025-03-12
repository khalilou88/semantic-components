import { Signal, computed } from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';

import { CalendarDay } from './types';
import { getFirstDayOfWeek } from './utils';

export function isToday(date: Temporal.PlainDate): boolean {
  //TODO remove today from here
  const today = Temporal.Now.plainDateISO();
  return date.equals(today);
}

export function isDateDisabled(
  minDate: Signal<Temporal.PlainDate>,
  maxDate: Signal<Temporal.PlainDate>,
  date: Temporal.PlainDate,
): boolean {
  if (minDate() && Temporal.PlainDate.compare(date, minDate()) < 0) {
    return true;
  }
  if (maxDate() && Temporal.PlainDate.compare(date, maxDate()) > 0) {
    return true;
  }
  return false;
}

//Remove minDate and maxDate
// Generate calendar days for the current month
export function generateCalendarDays(
  localeId: string,
  currentMonth: Signal<Temporal.PlainYearMonth>,
  minDate: Signal<Temporal.PlainDate>,
  maxDate: Signal<Temporal.PlainDate>,
) {
  return computed(() => {
    const days: CalendarDay[] = [];

    // Get locale-specific week info
    const firstDayOfWeek = getFirstDayOfWeek(localeId);

    const firstDayOfMonth = currentMonth().toPlainDate({ day: 1 });

    // Calculate the day of week adjusted for locale
    // Convert from 1-7 (Monday-Sunday) to 0-6 for easier array handling
    const firstOfMonthDayOfWeek = firstDayOfMonth.dayOfWeek % 7;
    const adjustedFirstDay = (firstOfMonthDayOfWeek - firstDayOfWeek + 7) % 7;

    // Add days from previous month to fill the first week
    const prevMonth = currentMonth().subtract({ months: 1 });
    const daysInPrevMonth = prevMonth.daysInMonth;

    for (let i = 0; i < adjustedFirstDay; i++) {
      const day = daysInPrevMonth - adjustedFirstDay + i + 1;
      const date = prevMonth.toPlainDate({ day });
      days.push({
        date,
        dayOfMonth: day,
        isInCurrentMonth: false,
        isToday: isToday(date),
        isDisabled: isDateDisabled(minDate, maxDate, date),
      });
    }

    // Add days of current month
    for (let day = 1; day <= currentMonth().daysInMonth; day++) {
      const date = currentMonth().toPlainDate({ day });
      days.push({
        date,
        dayOfMonth: day,
        isInCurrentMonth: true,
        isToday: isToday(date),
        isDisabled: isDateDisabled(minDate, maxDate, date),
      });
    }

    const a = days.length % 7;

    if (a > 0) {
      // Add days from next month to complete the grid
      const daysNeeded = 7 - a;
      const nextMonth = currentMonth().add({ months: 1 });

      for (let day = 1; day <= daysNeeded; day++) {
        const date = nextMonth.toPlainDate({ day });
        days.push({
          date,
          dayOfMonth: day,
          isInCurrentMonth: false,
          isToday: isToday(date),
          isDisabled: isDateDisabled(minDate, maxDate, date),
        });
      }
    }

    return days;
  });
}
