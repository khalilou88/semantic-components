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

import { cn } from '@semantic-components/utils';
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel';

@Component({
  selector: 'div[sc-carousel]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'region',
    'aria-roledescription': 'carousel',
    '[class]': 'class()',
    '(keydown)': 'handleKeydown($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarousel {
  private readonly emblaNode = inject(ElementRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('overflow-hidden', this.classInput()));

  readonly options = input<EmblaOptionsType>({ loop: false });

  readonly plugins = input<EmblaPluginType[]>([]);

  readonly canScrollPrev = signal(false);

  readonly canScrollNext = signal(false);

  private emblaApi!: EmblaCarouselType;

  get carouselApi() {
    return this.emblaApi;
  }

  readonly orientation = computed<'horizontal' | 'vertical'>(() => {
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
