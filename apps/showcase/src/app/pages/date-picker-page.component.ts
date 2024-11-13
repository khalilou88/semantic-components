import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-page',
  standalone: true,
  imports: [CommonModule, DatePickerComponent],
  template: `
    <p>date-picker works!</p>

    <lib-date-picker />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerPageComponent {}
