import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';
import { ButtonVariants, buttonVariants } from '../button';

@Component({
  selector: 'button[sc-carousel-next]',
  imports: [],
  template: `
    <ng-content />
    <span class="sr-only">Next slide</span>
  `,
  host: {
    '[class]': 'classes()',
    disabled: '!canScrollNext()',
    click: 'scrollNext()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselNext {
  orientation = input<'horizontal'>('horizontal');

  variant = input<ButtonVariants['variant']>('primary');

  size = input<ButtonVariants['size']>('default');

  class = input<string>('');

  classes = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'absolute h-8 w-8 rounded-full',
      this.orientation() === 'horizontal'
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      this.class(),
    ),
  );

  canScrollNext = signal(false);

  scrollNext() {
    console.log('scrollNext');
  }
}
