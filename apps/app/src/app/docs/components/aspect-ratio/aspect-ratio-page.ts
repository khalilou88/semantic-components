import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AspectRatioDemoSection } from './aspect-ratio-demo-section';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [AspectRatioDemoSection],
  template: `
    <app-aspect-ratio-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
