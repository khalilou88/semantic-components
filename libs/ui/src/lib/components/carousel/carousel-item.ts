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
  selector: 'div[sc-carousel-item]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'group',
    '[attr.aria-roledescription]': '"slide"',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselItem {
  scCarousel = inject(ScCarousel);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      this.scCarousel.orientation() === 'horizontal' ? 'pl-4' : 'pt-4',
      this.class(),
    ),
  );
}
