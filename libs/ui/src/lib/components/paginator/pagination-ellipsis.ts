import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'span[sc-pagination-ellipsis]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'aria-hidden': 'true',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationEllipsis {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('flex size-9 items-center justify-center', this.classInput()),
  );
}
