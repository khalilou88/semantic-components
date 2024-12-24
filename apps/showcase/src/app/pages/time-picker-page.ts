import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTimePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-time-picker-page',
  imports: [ScTimePicker],
  template: `
    <div class="m-10">
      <sc-time-picker />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimePickerPage {}
