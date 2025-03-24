import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CalendarDemo } from './calendar-demo';

@Component({
  selector: 'app-calendar-demo-section',
  imports: [PreviewCodeTabs, CalendarDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-calendar-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-calendar-demo',
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
export class CalendarDemo {
  calendarForm = new FormGroup({
    date: new FormControl(''),
  });
}`;
}
