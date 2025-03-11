import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScNewCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-test-page',
  imports: [ScNewCalendar],
  template: `
    <div class="m-10">
      <sc-new-calendar />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPage {}
