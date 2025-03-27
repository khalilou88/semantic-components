import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { BadgeDemoSection } from './badge-demo-section';

@Component({
  selector: 'app-badge-page',
  imports: [BadgeDemoSection],
  template: `
    <app-badge-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BadgePage {}
