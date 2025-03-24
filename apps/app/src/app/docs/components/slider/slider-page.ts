import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SliderDemoSection } from './slider-demo-section';

@Component({
  selector: 'app-slider-page',
  imports: [SliderDemoSection],
  template: `
    <app-slider-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderPage {}
