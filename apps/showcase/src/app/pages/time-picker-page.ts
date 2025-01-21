import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScClock, ScClockTimePicker, ScTimePicker, ScTimePicker2 } from '@semantic-components/ui';

@Component({
  selector: 'app-time-picker-page',
  imports: [ScTimePicker, ScTimePicker2, ScClockTimePicker, ScClock],
  template: `
    <div class="m-10">
      <sc-time-picker />

      <br />
      <br />
      <br />

      <sc-time-picker2 [initialTime]="'9:00 AM'" (timeSelected)="onTimeSelected($event)" />

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
export default class TimePickerPage {
  onTimeSelected(time: string) {
    console.log('Selected time:', time);
  }
}
