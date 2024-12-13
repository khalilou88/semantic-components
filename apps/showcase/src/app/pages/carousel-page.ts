import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScCarousel,
  ScCarouselItem,
  ScCarouselItems,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';
import { SvgArrowLeftIcon, SvgArrowRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-carousel-page',
  imports: [
    ScCarousel,
    ScCarouselItems,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
    SvgArrowLeftIcon,
    SvgArrowRightIcon,
  ],
  template: `
    <div sc-carousel>
      <div sc-carousel-items>
        <div sc-carousel-item>Slide 1</div>
        <div sc-carousel-item>Slide 2</div>
        <div sc-carousel-item>Slide 3</div>
      </div>
      <button sc-carousel-previous><svg-arrow-left-icon class="h-4 w-4" /></button>
      <button sc-carousel-next><svg-arrow-right-icon class="h-4 w-4" /></button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {}
