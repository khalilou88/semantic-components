import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

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
  orientation = input<'horizontal'>('horizontal');

  class = input<string>('');

  classes = computed(() =>
    cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      this.orientation() === 'horizontal' ? 'pl-4' : 'pt-4',
      this.class(),
    ),
  );
}
