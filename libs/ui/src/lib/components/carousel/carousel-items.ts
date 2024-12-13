import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

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
export class CarouselItems {
  orientation = input<'horizontal'>('horizontal');

  class = input<string>('');

  classes = computed(() =>
    cn('flex', this.orientation() === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', this.class()),
  );
}
