import { Temporal } from '@js-temporal/polyfill';

export function getFirstDayOfWeek(localeId: string): number {
  const locale = new Intl.Locale(localeId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (locale as any).getWeekInfo().firstDay;
}

// Format date using Intl
export function formatDate(locale: string, date: Temporal.PlainDate): string {
  // Convert Temporal date to JavaScript Date for Intl compatibility
  const jsDate = new Date(date.year, date.month - 1, date.day);

  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(jsDate);
}

// Get day names based on locale
export function getLocalizedDayNames(
  locale: string,
  format: 'long' | 'short' | 'narrow' = 'short',
): string[] {
  const days = [];
  const firstDay = getFirstDayOfWeek(locale);

  // Create a date for a week
  const date = new Date(2023, 0, 1); // Jan 1, 2023 is a Sunday
  const formatter = new Intl.DateTimeFormat(locale, { weekday: format });

  // Adjust to get days in correct order for locale
  for (let i = 0; i < 7; i++) {
    const dayIndex = (firstDay + i) % 7;
    date.setDate(1 + dayIndex); // Jan 1 is a Sunday in our reference date
    days.push(formatter.format(date));
  }

  return days;
}

// Get month names based on locale
export function getLocalizedMonthNames(locale: string): string[] {
  const months = [];
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });

  for (let month = 0; month < 12; month++) {
    const date = new Date(2023, month, 1);
    months.push(formatter.format(date));
  }

  return months;
}

// Get current month name based on locale
export function getMonthName(locale: string, yearMonth: Temporal.PlainYearMonth): string {
  const jsDate = new Date(yearMonth.year, yearMonth.month - 1, 1);

  return new Intl.DateTimeFormat(locale, { month: 'long' }).format(jsDate);
}
