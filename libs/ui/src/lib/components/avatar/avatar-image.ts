import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { AvatarState } from './avatar-state';

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
  readonly avatarState = inject(AvatarState);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'absolute inset-0 h-full w-full object-cover transition-opacity duration-200 z-10',
      this.avatarState.state() === 'loaded' && 'opacity-100',
      this.avatarState.state() === 'loading' && 'opacity-0',
      this.avatarState.state() === 'error' && 'hidden',
      this.classInput(),
    ),
  );

  protected handleLoad() {
    this.avatarState.state.set('loaded');
  }

  protected handleError() {
    this.avatarState.state.set('error');
  }
}
