import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CarouselDemoSection } from './carousel-demo-section';

@Component({
  selector: 'app-carousel-page',
  imports: [CarouselDemoSection],
  template: `
    <app-carousel-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {}
