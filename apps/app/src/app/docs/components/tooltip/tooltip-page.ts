import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TooltipDemoSection } from './tooltip-demo-section';

@Component({
  selector: 'app-tooltip-page',
  imports: [TooltipDemoSection],
  template: `
    <app-tooltip-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TooltipPage {}
