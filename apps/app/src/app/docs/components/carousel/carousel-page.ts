import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CarouselDemoSection } from './carousel-demo-section';
import { CarouselOrientationSection } from './carousel-orientation-section';

@Component({
  selector: 'app-carousel-page',
  imports: [CarouselDemoSection, CarouselOrientationSection],
  template: `
    <app-carousel-demo-section />

    <app-carousel-orientation-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {}
