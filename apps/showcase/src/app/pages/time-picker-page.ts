import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScClockPicker,
  ScClockPicker2,
  ScTimePicker,
  ScTimePicker2,
} from '@semantic-components/ui';

@Component({
  selector: 'app-time-picker-page',
  imports: [ScTimePicker, ScTimePicker2, ScClockPicker, ScClockPicker2],
  template: `
    <div class="m-10">
      <sc-time-picker />

      <br />
      <br />
      <br />

      <sc-clock-picker
        [initialTime]="'9:00 AM'"
        (timeSelected)="onTimeSelected($event)"
      ></sc-clock-picker>

      <br />
      <br />
      <br />

      <sc-time-picker2 [initialTime]="'9:00 AM'" (timeSelected)="onTimeSelected($event)" />

      <br />
      <br />
      <br />
      <sc-clock-picker2 />

      <br />
      <br />
      <br />
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
