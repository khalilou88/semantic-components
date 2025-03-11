import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';

import { ScDayButton } from '../calendar/day-button';
import { CalendarDay } from '../calendar/types';

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
          [isFocused]="isFocused(day.date)"
          (click)="selectDay(day); $event.stopPropagation()"
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
  readonly dateSelected = output<Temporal.PlainDate>();

  readonly selectedDate = input<Temporal.PlainDate>();
  readonly focusedDate = input<Temporal.PlainDate>();

  protected getVariant(day: CalendarDay) {
    if (this.isSelected(day.date)) {
      return 'primary';
    }

    if (this.isFocused(day.date)) {
      return 'secondary';
    }

    if (day.isToday) {
      return 'outline';
    }

    return 'ghost';
  }

  protected selectDay(day: CalendarDay) {
    this.dateSelected.emit(day.date);
  }

  isSelected(date: Temporal.PlainDate): boolean {
    return this.selectedDate() ? date.equals(this.selectedDate()!) : false;
  }

  isFocused(date: Temporal.PlainDate): boolean {
    return this.focusedDate() ? date.equals(this.focusedDate()!) : false;
  }
}
