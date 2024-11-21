import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DatePickerComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  standalone: true,
  imports: [CommonModule, DatePickerComponent],
  template: `
    <sc-date-picker />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerPageComponent {}
