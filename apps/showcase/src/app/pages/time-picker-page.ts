import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScClock, ScClockTimePicker, ScTimePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-time-picker-page',
  imports: [ScTimePicker, ScClockTimePicker, ScClock],
  template: `
    <div class="m-10">
      <sc-time-picker />

      <br />
      <br />
      <br />

      <sc-clock-time-picker />

      <br />
      <br />
      <br />

      <sc-clock />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimePickerPage {}
