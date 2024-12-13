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
    '(keydown)': 'handleKeydown($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarousel {
  emblaNode = inject(ElementRef);

  class = input<string>('');

  classes = computed(() => cn('relative overflow-hidden', this.class()));

  options = input<EmblaOptionsType>({ loop: false });

  plugins = input<EmblaPluginType[]>([]);

  canScrollPrev = signal(false);

  canScrollNext = signal(false);

  private emblaApi!: EmblaCarouselType;

  get carouselApi() {
    return this.emblaApi;
  }

  orientation = computed<'horizontal' | 'vertical'>(() => {
    return this.options()?.axis === 'y' ? 'vertical' : 'horizontal';
  });

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

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.scrollNext();
    }
  }

  scrollPrev() {
    console.log('scrollPrev');
    this.emblaApi.scrollPrev();
  }

  scrollNext() {
    console.log('scrollNext');
    this.emblaApi.scrollNext();
  }
}
