import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScDatePicker, Settings } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  imports: [ScDatePicker],
  template: `
    <div class="m-10">
      <br />
      <br />
      <br />
      <br />
      {{ settings.dateFormatPattern() }}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <sc-date-picker />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {
  settings = inject(Settings);
}
