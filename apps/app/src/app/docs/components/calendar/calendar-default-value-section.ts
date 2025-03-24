import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CalendarDefaultValue } from './calendar-default-value';

@Component({
  selector: 'app-calendar-default-value-section',
  imports: [PreviewCodeTabs, CalendarDefaultValue],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-calendar-default-value />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDefaultValueSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Temporal } from '@js-temporal/polyfill';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-calendar-default-value',
  imports: [ScCalendar, ReactiveFormsModule],
  template: \`
    <form [formGroup]="calendarForm">
      <sc-calendar formControlName="date" />
    </form>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDefaultValue {
  calendarForm = new FormGroup({
    date: new FormControl(Temporal.PlainDate.from('1988-06-25')),
  });
}`;
}
