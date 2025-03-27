import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { DatePickerDemo } from './date-picker-demo';

@Component({
  selector: 'app-date-picker-demo-section',
  imports: [PreviewCodeTabs, DatePickerDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-date-picker-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ScDatePicker, ScDatePickerToggle, ScInput } from '@semantic-components/ui';
import { SiCalendarIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-date-picker-demo',
  imports: [ScDatePicker, ScDatePickerToggle, SiCalendarIcon, ScInput, ReactiveFormsModule],
  template: \`
    <sc-date-picker>
      <button sc-date-picker-toggle>
        <svg si-calendar-icon></svg>
      </button>
      <input placeholder="Select date" sc-input type="text" />
    </sc-date-picker>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemo {}`;
}
