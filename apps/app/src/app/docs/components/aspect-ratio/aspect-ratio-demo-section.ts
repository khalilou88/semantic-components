import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AspectRatioDemo } from './aspect-ratio-demo';

@Component({
  selector: 'app-aspect-ratio-demo-section',
  imports: [AspectRatioDemo],
  template: `
    <app-aspect-ratio-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioDemoSection {}
