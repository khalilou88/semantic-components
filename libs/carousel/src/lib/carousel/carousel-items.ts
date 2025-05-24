import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScCarousel } from './carousel';

@Component({
  selector: 'div[sc-carousel-items]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselItems {
  private readonly scCarousel = inject(ScCarousel);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'flex',
      this.scCarousel.orientation() === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
      this.classInput(),
    ),
  );
}
