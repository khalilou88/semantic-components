import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from 'libs/ui/src/lib/utils';

@Component({
  selector: 'app-sidebar-container',
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
export class SidebarContainer {
  class = input<string>('');

  classes = computed(() =>
    cn('relative flex min-h-svh w-full border-4 border-red-500/100', this.class()),
  );
}
