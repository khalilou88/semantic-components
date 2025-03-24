import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SliderDemo } from './slider-demo';

@Component({
  selector: 'app-slider-demo-section',
  imports: [SliderDemo],
  template: `
    <app-slider-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDemoSection {}
