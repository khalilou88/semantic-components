import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TooltipDemo } from './tooltip-demo';

@Component({
  selector: 'app-tooltip-demo-section',
  imports: [TooltipDemo],
  template: `
    <app-tooltip-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemoSection {}
