import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
} from '@angular/core';

import {
  ScCard,
  ScCardContent,
  ScCarousel,
  ScCarouselContainer,
  ScCarouselItem,
  ScCarouselItems,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';
import { SvgArrowLeftIcon, SvgArrowRightIcon } from '@semantic-icons/lucide-icons';
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

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
    ScCard,
    ScCardContent,
    ScCarouselContainer,
  ],
  template: `
    <div class="m-10 w-full max-w-xs" sc-carousel-container>
      <div [plugins]="plugins" [plugins]="plugins" sc-carousel>
        <div sc-carousel-items>
          @for (item of items; track $index) {
            <div sc-carousel-item>
              <div class="p-1">
                <div sc-card>
                  <div class="flex aspect-square items-center justify-center p-6" sc-card-content>
                    <span class="text-4xl font-semibold">{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <button sc-carousel-previous variant="secondary" size="icon">
          <svg-arrow-left-icon class="size-4" />
        </button>
        <button sc-carousel-next variant="secondary" size="icon">
          <svg-arrow-right-icon class="size-4" />
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {
  items = Array.from({ length: 5 }, (_, i) => i + 1);

  options: EmblaOptionsType = { loop: false };

  plugins: EmblaPluginType[] = [Autoplay()];
}
