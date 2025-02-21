import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
  computed,
  contentChild,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel';

import { ScCarouselViewport } from './carousel-viewport';

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
  private readonly scCarouselViewport = contentChild.required(ScCarouselViewport);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative', this.classInput()));

  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');

  readonly optionsInput = input<EmblaOptionsType>(
    {},
    {
      alias: 'options',
    },
  );

  readonly options = computed<EmblaOptionsType>(() => {
    const opts = this.optionsInput();

    return {
      ...opts,
      axis: this.orientation() === 'horizontal' ? 'x' : 'y',
    };
  });

  readonly plugins = input<EmblaPluginType[]>([]);

  readonly canScrollPrev = signal(false);

  readonly canScrollNext = signal(false);

  private emblaApi!: EmblaCarouselType;

  get carouselApi() {
    return this.emblaApi;
  }

  constructor() {
    afterNextRender(() => {
      this.emblaApi = EmblaCarousel(
        this.scCarouselViewport().getNativeElement(),
        this.options(),
        this.plugins(),
      );

      this.emblaApi
        .on('select', this.togglePrevNextBtnsState)
        .on('init', this.togglePrevNextBtnsState)
        .on('reInit', this.togglePrevNextBtnsState);
    });
  }

  togglePrevNextBtnsState = (): void => {
    if (this.emblaApi.canScrollPrev()) {
      this.canScrollPrev.set(true);
    } else {
      this.canScrollPrev.set(false);
    }

    if (this.emblaApi.canScrollNext()) {
      this.canScrollNext.set(true);
    } else {
      this.canScrollNext.set(false);
    }
  };

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.scrollNext();
    }
  }

  private scrollPrev() {
    this.emblaApi.scrollPrev();
  }

  private scrollNext() {
    this.emblaApi.scrollNext();
  }
}
