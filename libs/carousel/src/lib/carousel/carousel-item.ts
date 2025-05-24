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
    'aria-roledescription': 'slide',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselItem {
  private readonly scCarousel = inject(ScCarousel);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      this.scCarousel.orientation() === 'horizontal' ? 'pl-4' : 'pt-4',
      this.classInput(),
    ),
  );
}
