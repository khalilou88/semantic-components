import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'img[sc-avatar-image]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '(load)': 'handleLoad()',
    '(error)': 'handleError()',
    'data-slot': 'avatar-image',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatarImage {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'absolute inset-0 h-full w-full object-cover transition-opacity duration-200 z-10',
      this.state() === 'loaded' && 'opacity-100',
      (this.state() === 'loading' || this.state() === 'error') && 'opacity-0',
      this.classInput(),
    ),
  );

  private readonly state = signal<'loading' | 'loaded' | 'error'>('loading');

  protected handleLoad() {
    this.state.set('loaded');
  }

  protected handleError() {
    this.state.set('error');
  }
}
