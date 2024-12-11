import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from 'libs/ui/src/lib/utils';

import { SidebarState } from '../services/sidebar-state';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <p>sidebar works!</p>
  `,
  host: {
    '[class]': 'classes()',
    '[style.width.rem]': 'sidebarWidth()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  sidebarState = inject(SidebarState);

  class = input<string>('');

  classes = computed(() =>
    cn('absolute top-0 h-full left-0 border-4 border-indigo-500/100', this.class()),
  );

  sidebarWidth = computed<number>(() => {
    if (this.sidebarState.open()) {
      return 18; //"18rem"
    }

    return 0;
  });
}
