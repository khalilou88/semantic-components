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

import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel';

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

  emblaNode = inject(ElementRef);

  emblaApi!: EmblaCarouselType;

  options = input<EmblaOptionsType>({ loop: false });

  plugins = input<EmblaPluginType[]>([]);

  constructor() {
    afterNextRender(() => {
      this.emblaApi = EmblaCarousel(this.emblaNode.nativeElement, this.options(), this.plugins());

      console.log(this.emblaApi.slideNodes()); // Access API
    });
  }

  //TODO
  handleKeyDown() {
    console.log('handleKeyDown');
  }
}
