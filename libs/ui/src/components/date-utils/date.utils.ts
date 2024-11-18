import { FormatWidth, getLocaleDateFormat } from '@angular/common';

import { NumericDayOfWeek } from './day-of-week';
import { memoize } from './memoize';

export function setDay(date: Date, dayOfWeek: NumericDayOfWeek) {
  return addDays(date, dayOfWeek - date.getDay());
}

export function addDays(date: Date, days: number) {
  return setDate(date, date.getDate() + days);
}

export function setDate(date: Date, dayOfMonth: number) {
  const dateCopy = new Date(date);
  dateCopy.setDate(dayOfMonth);
  return dateCopy;
}

export function addMonths(date: Date, months: number) {
  return setMonth(date, date.getMonth() + months);
}

export function setMonth(date: Date, month: number) {
  const dateCopy = new Date(date);
  dateCopy.setMonth(month);
  return dateCopy;
}

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function getDaysOfMonth(month: Date) {
  return Array.from({ length: numberOfDaysInMonth(month) }, (_, index) =>
    setDate(month, index + 1),
  );
}

export function numberOfDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function isSameDate(date1: Date, date2: Date) {
  return date1.getTime() === date2.getTime();
}

export function areDatesInSameMonth(date1: Date, date2: Date) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}

export function isDateAfter(date1: Date, date2: Date) {
  return date1.getTime() > date2.getTime();
}

export function isValidDate(value?: any): value is Date {
  return value instanceof Date && typeof value.getTime === 'function' && !isNaN(value.getTime());
}

export function toISODateString(date: Date) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000).toISOString().split('T')[0];
}

export const monthAndYearFormatOptions = {
  year: 'numeric',
  month: 'long',
} as const;

export const localeDateFormatDayPart = /\s?d+(\.|,|\sde)?/;

export const getFallbackLocaleMonthAndYearFormat = memoize((locale: string) => {
  return getLocaleDateFormat(locale!, FormatWidth.Long).replace(localeDateFormatDayPart, '').trim();
});

export const getLocaleMonthAndYearFormat = memoize((locale: string) => {
  if (typeof Intl.DateTimeFormat.prototype.formatToParts === 'function') {
    const monthAndYearFormatter = new Intl.DateTimeFormat(locale, monthAndYearFormatOptions);
    return monthAndYearFormatter
      .formatToParts()
      .map(({ type, value }) => {
        switch (type) {
          case 'year':
            return 'y';
          case 'month':
            return 'MMMM';
          case 'literal':
            return `'${value}'`;
          default:
            return '';
        }
      })
      .reduce((dateFormat, dateFormatPart) => dateFormat + dateFormatPart);
  } else {
    return getFallbackLocaleMonthAndYearFormat(locale);
  }
});

export function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString('i');
  } catch (e) {
    return e instanceof RangeError;
  }
  return false;
}
