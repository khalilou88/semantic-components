import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'tr[sc-table-row]',
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
export class ScTableRow {
  class = input<string>('');

  classes = computed(() =>
    cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', this.class()),
  );
}
