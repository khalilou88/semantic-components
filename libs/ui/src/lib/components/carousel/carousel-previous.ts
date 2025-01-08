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
    '[class]': 'class()',
    '[disabled]': 'disabled()',
    '(click)': 'scrollPrev()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselPrevious {
  private readonly scCarousel = inject(ScCarousel);

  readonly variant = input<ButtonVariants['variant']>('primary');

  readonly size = input<ButtonVariants['size']>('default');

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'absolute h-8 w-8 rounded-full',
      this.scCarousel.orientation() === 'horizontal'
        ? '-left-12 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      this.classInput(),
    ),
  );

  protected readonly disabled = computed(() => {
    return !this.scCarousel.canScrollPrev();
  });

  protected scrollPrev() {
    this.scCarousel.carouselApi.scrollPrev();
  }
}
