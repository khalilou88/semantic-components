import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';
import { ScNewCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-test-page',
  imports: [ScNewCalendar],
  template: `
    <div class="m-10">
      <sc-new-calendar />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <sc-new-calendar [value]="date()" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPage {
  date = signal(Temporal.PlainDate.from('1988-06-25'));
}
