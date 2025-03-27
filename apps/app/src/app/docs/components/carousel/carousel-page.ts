import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CarouselDemoSection } from './carousel-demo-section';
import { CarouselOrientationSection } from './carousel-orientation-section';
import { CarouselSizeSection } from './carousel-size-section';

@Component({
  selector: 'app-carousel-page',
  imports: [CarouselDemoSection, CarouselOrientationSection, CarouselSizeSection],
  template: `
    <app-carousel-demo-section />

    <app-carousel-size-section title="Size" />

    <app-carousel-orientation-section title="Orientation" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {}
