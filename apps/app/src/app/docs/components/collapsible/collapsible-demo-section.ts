import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CollapsibleDemo } from './collapsible-demo';

@Component({
  selector: 'app-collapsible-demo-section',
  imports: [CollapsibleDemo],
  template: `
    <app-collapsible-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleDemoSection {}
