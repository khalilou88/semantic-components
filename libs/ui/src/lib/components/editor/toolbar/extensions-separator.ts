import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-extensions-separator',
  imports: [],
  template: `
    <span class="inline-block h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionsSeparator {
  class = input<string>('');

  classes = computed(() => cn('px-1', this.class()));
}
