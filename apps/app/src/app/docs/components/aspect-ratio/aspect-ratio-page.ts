import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AspectRatioDemoSection } from './aspect-ratio-demo-section';
import { AspectRatioRadixUiSection } from './aspect-ratio-radix-ui-section';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [AspectRatioDemoSection, AspectRatioRadixUiSection],
  template: `
    <app-aspect-ratio-demo-section />

    <app-aspect-ratio-radix-ui-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
