import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'nav[sc-pagination]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'navigation',
    '[attr.aria-label]': '"pagination"',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPagination {
  class = input<string>('');

  classes = computed(() => cn('mx-auto flex w-full justify-center', this.class()));
}
