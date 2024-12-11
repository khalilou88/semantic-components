import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from 'libs/ui/src/lib/utils';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <p>sidebar works!</p>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  class = input<string>('');

  classes = computed(() => cn('border-4 border-indigo-500/100', this.class()));
}
