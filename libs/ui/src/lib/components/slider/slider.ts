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

import { cn } from '../../utils';

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

  thumbClass = signal('');

  trackClass = signal('');

  classes = computed(() => cn('range-input', this.thumbClass(), this.trackClass(), this.class()));

  max = input<number>(100);

  constructor() {
    afterNextRender(() => {
      this.f(this.host.nativeElement.value);
    });
  }

  handleInput(event: KeyboardEvent) {
    if (!event.target) return;

    const currentValue = +(event.target as HTMLInputElement).value;
    this.f(currentValue);
  }

  f(currentValue: number) {
    const progress = (currentValue / this.max()) * 100;
    this.host.nativeElement.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
  }
}
