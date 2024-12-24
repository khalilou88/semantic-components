import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ButtonVariants, buttonVariants } from '../button';
import { ScCarousel } from './carousel';

@Component({
  selector: 'button[sc-carousel-previous]',
  imports: [],
  template: `
    <ng-content />
    <span class="sr-only">Previous slide</span>
  `,
  host: {
    '[class]': 'classes()',
    '[disabled]': 'disabled()',
    '(click)': 'scrollPrev()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselPrevious {
  scCarousel = inject(ScCarousel);

  variant = input<ButtonVariants['variant']>('primary');

  size = input<ButtonVariants['size']>('default');

  class = input<string>('');

  classes = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'absolute h-8 w-8 rounded-full',
      this.scCarousel.orientation() === 'horizontal'
        ? '-left-12 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      this.class(),
    ),
  );

  disabled() {
    return !this.scCarousel.canScrollPrev();
  }

  scrollPrev() {
    this.scCarousel.carouselApi.scrollPrev();
  }
}
