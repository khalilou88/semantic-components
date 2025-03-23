import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ScDatePicker, ScDatePickerToggle, ScInput } from '@semantic-components/ui';
import { SiCalendarIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-date-picker-demo',
  imports: [ScDatePicker, ScDatePickerToggle, SiCalendarIcon, ScInput, ReactiveFormsModule],
  template: `
    <sc-date-picker>
      <button sc-date-picker-toggle>
        <svg si-calendar-icon></svg>
      </button>
      <input placeholder="Select date" sc-input type="text" />
    </sc-date-picker>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemo {}
