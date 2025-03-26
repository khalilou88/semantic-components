import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { HoverCardDemoSection } from './hover-card-demo-section';

@Component({
  selector: 'app-hover-card-page',
  imports: [HoverCardDemoSection],
  template: `
    <app-hover-card-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HoverCardPage {}
