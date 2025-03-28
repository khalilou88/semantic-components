import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { LabelDemoSection } from './label-demo-section';

@Component({
  selector: 'app-label-page',
  imports: [LabelDemoSection],
  template: `
    <app-label-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LabelPage {}
