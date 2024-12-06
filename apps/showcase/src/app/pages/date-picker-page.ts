import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DatePickerComponent, InlineDatePickerComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  imports: [DatePickerComponent, InlineDatePickerComponent],
  template: `
    <p class="bg-primary-700">p</p>

    <sc-date-picker />
    <br />
    <br />
    <sc-inline-date-picker />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {}
