import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CalendarDefaultValue } from './calendar-default-value';

@Component({
  selector: 'app-calendar-default-value-section',
  imports: [CalendarDefaultValue],
  template: `
    <app-calendar-default-value />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDefaultValueSection {}
