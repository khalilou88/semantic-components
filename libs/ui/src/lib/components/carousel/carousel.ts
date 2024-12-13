import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  inject,
  input,
} from '@angular/core';

import EmblaCarousel from 'embla-carousel';

import { cn } from '../../utils';

@Component({
  selector: 'div[sc-carousel]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'region',
    'attr.aria-roledescription': '"carousel"',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarousel {
  class = input<string>('');

  classes = computed(() => cn('relative', this.class()));

  private emblaNode = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      const options = { loop: false };
      const emblaApi = EmblaCarousel(this.emblaNode.nativeElement, options);

      console.log(emblaApi.slideNodes()); // Access API
    });
  }

  handleKeyDown() {
    console.log('handleKeyDown');
  }
}
