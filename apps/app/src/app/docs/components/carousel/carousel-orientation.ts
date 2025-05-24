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
import { EmblaOptionsType } from 'embla-carousel';

@Component({
  selector: 'app-carousel-orientation',
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
    <div class="w-full max-w-xs mt-10" sc-carousel-container>
      <div class="w-full" [options]="options" orientation="vertical" sc-carousel>
        <div class="-mt-1 h-[200px]" sc-carousel-items>
          @for (item of items; track $index) {
            <div class="pt-1 md:basis-1/2" sc-carousel-item>
              <div class="p-1">
                <div sc-card>
                  <div class="flex items-center justify-center p-6" sc-card-content>
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
export class CarouselOrientation {
  items = Array.from({ length: 5 }, (_, i) => i + 1);

  options: EmblaOptionsType = { align: 'start' };
}
