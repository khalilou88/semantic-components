import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ChartDemoSection } from './chart-demo-section';

@Component({
  selector: 'app-chart-page',
  imports: [ChartDemoSection],
  template: `
    <app-chart-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartPage {}
