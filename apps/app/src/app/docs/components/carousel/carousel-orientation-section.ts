import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CarouselOrientation } from './carousel-orientation';

@Component({
  selector: 'app-carousel-orientation-section',
  imports: [CarouselOrientation],
  template: `
    <app-carousel-orientation />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselOrientationSection {}
