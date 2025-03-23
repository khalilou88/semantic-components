import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

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
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('bg-muted flex size-full items-center justify-center rounded-full', this.classInput()),
  );
}
