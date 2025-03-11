import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScRangeCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-range-calendar-page',
  imports: [ScRangeCalendar],
  template: `
    <div class="m-10">
      <sc-range-calendar />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RangeCalendarPage {}
