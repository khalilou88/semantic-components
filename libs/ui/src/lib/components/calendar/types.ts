import { Temporal } from '@js-temporal/polyfill';

// Interface for calendar day
export interface CalendarDay {
  date: Temporal.PlainDate;
  dayOfMonth: number;
  isInCurrentMonth: boolean;
}
