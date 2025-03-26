import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SeparatorDemoSection } from './separator-demo-section';

@Component({
  selector: 'app-separator-page',
  imports: [SeparatorDemoSection],
  template: `
    <app-separator-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SeparatorPage {}
