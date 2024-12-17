import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'img[sc-avatar-image]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(load)': 'handleLoad()',
    '(error)': 'handleError()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatarImage {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'aspect-square h-full w-full',
      (this.state() === 'loading' || this.state() === 'error') && 'invisible',
      this.class(),
    ),
  );

  state = signal<'loading' | 'loaded' | 'error'>('loading');

  handleLoad() {
    this.state.set('loaded');
  }

  handleError() {
    this.state.set('error');
  }
}
