import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-test-page',
  imports: [ScCalendar],
  template: `
    <div class="m-10">
      <sc-calendar />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPage {}
