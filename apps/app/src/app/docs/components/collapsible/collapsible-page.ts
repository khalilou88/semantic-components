import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CollapsibleDemoSection } from './collapsible-demo-section';

@Component({
  selector: 'app-collapsible-page',
  imports: [CollapsibleDemoSection],
  template: `
    <app-collapsible-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CollapsiblePage {}
