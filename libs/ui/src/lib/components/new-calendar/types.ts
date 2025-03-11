import { Temporal } from '@js-temporal/polyfill';

// Interface for calendar day
export interface CalendarDay {
  date: Temporal.PlainDate;
  dayOfMonth: number;
  isInCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}
