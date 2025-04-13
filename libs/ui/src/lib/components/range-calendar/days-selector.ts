import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';

import { isToday } from '../calendar/calendar-utils';
import { ScDayButton } from '../calendar/day-button';
import { CalendarDay } from '../calendar/types';
import { ScRange } from './types';

@Component({
  selector: 'sc-days-selector',
  imports: [ScDayButton],
  template: `
    <div class="grid grid-cols-7 gap-5">
      @for (weekday of weekdays(); track weekday) {
        <abbr class="size-10 text-center text-muted-foreground">
          {{ weekday }}
        </abbr>
      }

      @for (day of calendarDays(); track day.date) {
        <button
          [variant]="getVariant(day)"
          [hasFocus]="isFocused(day.date)"
          (click)="selectDate(day)"
          sc-day-button
          size="icon"
        >
          {{ day.dayOfMonth }}
        </button>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDaysSelector {
  readonly calendarDays = input.required<CalendarDay[]>();
  readonly weekdays = input.required<string[]>();
  readonly rangeSelected = output<ScRange>();

  readonly selectedRange = input<ScRange>();
  readonly focusedDate = input<Temporal.PlainDate>();

  protected getVariant(day: CalendarDay) {
    if (this.isSelected(day.date)) {
      return 'primary';
    }

    if (this.isFocused(day.date)) {
      return 'secondary';
    }

    if (isToday(day.date)) {
      return 'outline';
    }

    return 'ghost';
  }

  protected selectDay(day: CalendarDay) {
    const range = {
      start: day.date,
      end: day.date,
    };

    this.rangeSelected.emit(range);
  }

  isSelected(date: Temporal.PlainDate): boolean {
    return this.selectedRange()
      ? date.equals(this.selectedRange()!.start) || date.equals(this.selectedRange()!.end)
      : false;
  }

  isFocused(date: Temporal.PlainDate): boolean {
    return this.focusedDate() ? date.equals(this.focusedDate()!) : false;
  }

  isDateInRange(date: Temporal.PlainDate): boolean {
    if (!this.selectedRange()?.start || !this.selectedRange()?.end) {
      return false;
    }

    return (
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      (Temporal.PlainDate.compare(date, this.selectedRange()?.start!) >= 0 &&
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        Temporal.PlainDate.compare(date, this.selectedRange()?.end!) <= 0) ||
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      (Temporal.PlainDate.compare(date, this.selectedRange()?.end!) >= 0 &&
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        Temporal.PlainDate.compare(date, this.selectedRange()?.start!) <= 0)
    );
  }

  selectDate(day: CalendarDay) {
    console.log('selectDate');
  }
}
