import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CalendarDefaultValueSection } from './calendar-default-value-section';
import { CalendarDemoSection } from './calendar-demo-section';

@Component({
  selector: 'app-calendar-page',
  imports: [CalendarDemoSection, CalendarDefaultValueSection],
  template: `
    <app-calendar-demo-section />

    <app-calendar-default-value-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPage {}
