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

import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';

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

  options = input<EmblaOptionsType>({ loop: false });

  constructor() {
    afterNextRender(() => {
      const emblaApi = EmblaCarousel(this.emblaNode.nativeElement, this.options());

      console.log(emblaApi.slideNodes()); // Access API
    });
  }

  //TODO
  handleKeyDown() {
    console.log('handleKeyDown');
  }
}
