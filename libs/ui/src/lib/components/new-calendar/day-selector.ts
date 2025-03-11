import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { CalendarDay } from './types';

@Component({
  selector: 'sc-day-selector',
  imports: [],
  template: `
    <div class="grid grid-cols-7 gap-5">
      @for (day of calendarDays(); track day) {
        {{ day.dayOfMonth }}
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaySelector {
  readonly calendarDays = input.required<CalendarDay[]>();
}
