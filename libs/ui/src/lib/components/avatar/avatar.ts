import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-avatar',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    'data-slot': 'avatar',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatar {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'relative size-8 inline-flex items-center justify-center overflow-hidden rounded-full',
      this.classInput(),
    ),
  );
}
