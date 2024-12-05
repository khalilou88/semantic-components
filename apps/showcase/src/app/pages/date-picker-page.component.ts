import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DatePickerComponent, InlineDatePickerComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  imports: [CommonModule, DatePickerComponent, InlineDatePickerComponent],
  template: `
    <sc-date-picker />
    <br />
    <br />
    <sc-inline-date-picker />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerPageComponent {}
