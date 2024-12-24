import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'nav[sc-breadcrumb]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[attr.aria-label]': 'ariaLabel',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumb {
  ariaLabel = 'breadcrumb';

  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      this.class(),
    ),
  );
}
