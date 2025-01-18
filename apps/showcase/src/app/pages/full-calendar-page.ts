import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScFullCalendar, ScMobileCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-full-calendar-page',
  imports: [ScFullCalendar, ScMobileCalendar],
  template: `
    <div class="m-10">
      <sc-full-calendar />

      <br />
      <br />

      <sc-mobile-calendar />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FullCalendarPage {}
