import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCalendarBase } from '../calendar/calendar-base';
import { ScCalendarHeader } from '../calendar/calendar-header';
import { ScDaySelector } from '../calendar/day-selector';
import { ScMonthSelector } from '../calendar/month-selector';
import { ScYearSelector } from '../calendar/year-selector';
import { ScCard, ScCardContent, ScCardHeader } from '../card';

@Component({
  selector: 'sc-range-calendar',
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
          [disabled]="view() === 'months'"
          (monthYearChange)="setMonthYear($event)"
          (viewToggled)="toggleView()"
        />
      </div>
      <div sc-card-content>
        @switch (view()) {
          @case ('years') {
            <sc-year-selector [currentYear]="currentYear()" (yearSelected)="selectYear($event)" />
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
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRangeCalendar extends ScCalendarBase {}
