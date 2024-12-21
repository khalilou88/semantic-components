import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScDatePicker, ScInlineDatePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  imports: [ScDatePicker, ScInlineDatePicker],
  template: `
    <div class="m-10">
      <sc-inline-date-picker />

      <br />
      <br />
      <br />
      <br />

      <sc-date-picker />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {}
