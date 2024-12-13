import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
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
    '[attr.aria-roledescription]': '"carousel"',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarousel {
  emblaNode = inject(ElementRef);

  class = input<string>('');

  classes = computed(() => cn('relative', this.class()));

  options = input<EmblaOptionsType>({ loop: false });

  plugins = input<EmblaPluginType[]>([]);

  canScrollPrev = signal(false);

  canScrollNext = signal(false);

  private emblaApi!: EmblaCarouselType;

  get carouselApi() {
    return this.emblaApi;
  }

  constructor() {
    afterNextRender(() => {
      this.emblaApi = EmblaCarousel(this.emblaNode.nativeElement, this.options(), this.plugins());

      this.emblaApi
        .on('select', this.togglePrevNextBtnsState)
        .on('init', this.togglePrevNextBtnsState)
        .on('reInit', this.togglePrevNextBtnsState);
    });
  }

  togglePrevNextBtnsState = (): void => {
    if (this.emblaApi.canScrollPrev()) this.canScrollPrev.set(true);
    else this.canScrollPrev.set(false);

    if (this.emblaApi.canScrollNext()) this.canScrollNext.set(true);
    else this.canScrollNext.set(false);
  };

  //TODO
  handleKeyDown() {
    console.log('handleKeyDown');
  }
}
