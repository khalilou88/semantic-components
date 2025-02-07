import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'nav[sc-pagination]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'navigation',
    'aria-label': 'pagination',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPagination {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('mx-auto flex w-full justify-center', this.classInput()),
  );
}
