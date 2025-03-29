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
  selector: 'div[sc-avatar-fallback]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    'data-slot': 'avatar-fallback',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatarFallback {
  readonly avatarState = inject(AvatarState);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'absolute inset-0 flex size-full items-center justify-center bg-muted uppercase',
      this.avatarState.state() === 'loaded' && 'hidden',
      this.classInput(),
    ),
  );
}
