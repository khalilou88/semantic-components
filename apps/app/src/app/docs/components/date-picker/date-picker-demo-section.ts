import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DatePickerDemo } from './date-picker-demo';

@Component({
  selector: 'app-date-picker-demo-section',
  imports: [DatePickerDemo],
  template: `
    <app-date-picker-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemoSection {}
