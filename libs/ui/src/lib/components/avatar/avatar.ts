import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScAvatarFallback } from './avatar-fallback';
import { ScAvatarImage } from './avatar-image';

@Component({
  selector: 'sc-avatar',
  imports: [ScAvatarImage, ScAvatarFallback],
  template: `
    <img [alt]="alt()" [src]="src()" sc-avatar-image />
    <div sc-avatar-fallback>{{ fallback() }}</div>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatar {
  class = input<string>('');

  classes = computed(() =>
    cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', this.class()),
  );

  src = input.required<string>();
  alt = input<string>('');
  fallback = input<string>('');
}
