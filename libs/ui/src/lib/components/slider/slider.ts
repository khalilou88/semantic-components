import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'input[sc-slider]',
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
export class ScSlider {
  class = input<string>('');

  //https://github.com/tailwindlabs/tailwindcss/discussions/8748
  //https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider/63941494#63941494
  thumbClass = signal(
    '[&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-background [&::-webkit-slider-thumb]:ring-offset-background [&::-webkit-slider-thumb]:transition-colors [&::-webkit-slider-thumb]:focus-visible:outline-none [&::-webkit-slider-thumb]:focus-visible:ring-2 [&::-webkit-slider-thumb]:focus-visible:ring-ring [&::-webkit-slider-thumb]:focus-visible:ring-offset-2 [&::-webkit-slider-thumb]:disabled:pointer-events-none [&::-webkit-slider-thumb]:disabled:opacity-50',
  );

  trackClass = signal(
    '[&::-webkit-slider-runnable-track]:h-4 [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-secondary',
  );

  classes = computed(() =>
    cn('appearance-none bg-transparent', this.thumbClass(), this.trackClass(), this.class()),
  );

  min = input<number>(0);

  max = input<number>(0);

  step = input<number>(0);

  constructor() {
    effect(() => {
      console.log('min ', this.min());
      console.log('max ', this.max());
      console.log('step ', this.step());
    });
  }
}
