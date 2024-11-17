import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sc-date-time-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>date-time-picker works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {}
