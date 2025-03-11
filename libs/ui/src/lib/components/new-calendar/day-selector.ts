import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';

import { ScButton } from '../button';
import { CalendarDay } from './types';

@Component({
  selector: 'sc-day-selector',
  imports: [ScButton],
  template: `
    <div class="grid grid-cols-7 gap-5">
      @for (day of calendarDays(); track day) {
        <button
          [variant]="getVariant(day)"
          (click)="selectDay(day); $event.stopPropagation()"
          sc-button
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
export class DaySelector {
  readonly calendarDays = input.required<CalendarDay[]>();
  readonly dateSelected = output<Temporal.PlainDate>();

  protected getVariant(day: CalendarDay) {
    if (day.isSelected) {
      return 'primary';
    }

    if (day.isToday) {
      return 'outline';
    }

    return 'ghost';
  }

  protected selectDay(day: CalendarDay) {
    this.dateSelected.emit(day.date);
  }
}
