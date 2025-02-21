import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  linkedSignal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ButtonVariants, ScButtonBase, buttonVariants } from '../button';
import { ScCarousel } from './carousel';

@Component({
  selector: 'button[sc-carousel-previous]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '(click)': 'scrollPrev()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselPrevious extends ScButtonBase {
  private readonly scCarousel = inject(ScCarousel);

  override readonly variantInput = input<ButtonVariants['variant']>('outline');

  override readonly sizeInput = input<ButtonVariants['size']>('icon');

  protected override readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'absolute h-8 w-8 rounded-full',
      this.scCarousel.orientation() === 'horizontal'
        ? '-left-12 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      this.classInput(),
    ),
  );

  protected override readonly disabled = linkedSignal(() => {
    return !this.scCarousel.canScrollPrev();
  });

  protected scrollPrev() {
    this.scCarousel.carouselApi.scrollPrev();
  }
}
