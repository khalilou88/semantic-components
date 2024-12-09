import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScDatePicker, ScInlineDatePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  imports: [ScDatePicker, ScInlineDatePicker],
  template: `
    <div class="flex justify-between">
      <sc-inline-date-picker />
      <sc-date-picker />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {}
