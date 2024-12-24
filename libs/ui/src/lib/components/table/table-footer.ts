import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'tfoot[sc-table-footer]',
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
export class ScTableFooter {
  class = input<string>('');

  classes = computed(() =>
    cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', this.class()),
  );
}
