import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScFullCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-full-calendar-page',
  imports: [ScFullCalendar],
  template: `
    <div class="m-10">
      <sc-full-calendar />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FullCalendarPage {}
