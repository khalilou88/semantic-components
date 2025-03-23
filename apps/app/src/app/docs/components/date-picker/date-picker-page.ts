import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DatePickerDemoSection } from './date-picker-demo-section';

@Component({
  selector: 'app-date-picker-page',
  imports: [DatePickerDemoSection],
  template: `
    <app-date-picker-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {}
