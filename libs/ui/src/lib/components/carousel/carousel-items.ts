import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScCarousel } from './carousel';

@Component({
  selector: 'div[sc-carousel-items]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselItems {
  scCarousel = inject(ScCarousel);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex',
      this.scCarousel.orientation() === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
      this.class(),
    ),
  );
}
