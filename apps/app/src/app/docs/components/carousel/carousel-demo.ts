import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScCarousel,
  ScCarouselContainer,
  ScCarouselItem,
  ScCarouselItems,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/carousel';
import { ScCard, ScCardContent } from '@semantic-components/ui';
import { SiArrowLeftIcon, SiArrowRightIcon } from '@semantic-icons/lucide-icons';
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-carousel-demo',
  imports: [
    ScCarousel,
    ScCarouselContainer,
    ScCarouselItems,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
    SiArrowLeftIcon,
    SiArrowRightIcon,
    ScCard,
    ScCardContent,
  ],
  template: `
    <div class="w-full max-w-xs" sc-carousel-container>
      <div class="w-full" [options]="options" [plugins]="plugins" sc-carousel>
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

        <button sc-carousel-previous>
          <svg class="size-4" si-arrow-left-icon></svg>
          <span class="sr-only">Previous slide</span>
        </button>
        <button sc-carousel-next>
          <svg class="size-4" si-arrow-right-icon></svg>
          <span class="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDemo {
  items = Array.from({ length: 5 }, (_, i) => i + 1);

  options: EmblaOptionsType = { loop: false };

  plugins: EmblaPluginType[] = [Autoplay()];
}
