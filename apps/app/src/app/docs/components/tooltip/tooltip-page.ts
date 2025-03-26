import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TooltipDemoSection } from './tooltip-demo-section';
import { TooltipPositionSection } from './tooltip-position-section';

@Component({
  selector: 'app-tooltip-page',
  imports: [TooltipDemoSection, TooltipPositionSection],
  template: `
    <app-tooltip-demo-section />

    <app-tooltip-position-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TooltipPage {}
