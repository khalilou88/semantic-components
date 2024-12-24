import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'input[sc-slider]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(input)': 'handleInput($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSlider {
  private host = inject(ElementRef);

  class = input<string>('');

  trackClass = signal(
    '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full',
  );

  thumbClass = signal(
    '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:-mt-1.5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary',
  );

  classes = computed(() =>
    cn(
      'appearance-none bg-transparent w-full rounded-full h-2',
      this.trackClass(),
      this.thumbClass(),
      this.class(),
    ),
  );

  value = model<number>(0);
  min = input<number>(0);
  max = input<number>(100);

  constructor() {
    effect(() => {
      const progress = (this.value() / this.max()) * 100;
      this.host.nativeElement.style.background = `linear-gradient(to right, hsl(var(--primary)) ${progress}%, #ccc ${progress}%)`;
    });

    afterNextRender(() => {
      if (this.host.nativeElement.value > 0) {
        this.value.set(this.host.nativeElement.value);
      }
    });
  }

  handleInput(event: KeyboardEvent) {
    if (!event.target) return;
    this.value.set(+(event.target as HTMLInputElement).value);
  }
}
