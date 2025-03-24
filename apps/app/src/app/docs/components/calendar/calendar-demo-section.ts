import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CalendarDemo } from './calendar-demo';

@Component({
  selector: 'app-calendar-demo-section',
  imports: [CalendarDemo],
  template: `
    <app-calendar-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDemoSection {}
