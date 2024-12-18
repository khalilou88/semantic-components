import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'th[sc-table-head]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTableHead {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      this.class(),
    ),
  );
}
