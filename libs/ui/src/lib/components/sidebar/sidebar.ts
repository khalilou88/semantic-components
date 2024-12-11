import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '[style.width.rem]': 'sidebarWidth()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebar {
  sidebarState = inject(ScSidebarState);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'absolute top-0 h-full left-0 bg-sidebar text-sidebar-foreground z-50 border-4 border-indigo-500/100',
      this.class(),
    ),
  );

  sidebarWidth = computed<number>(() => {
    if (this.sidebarState.open()) {
      return 18; //"18rem"
    }

    return 0;
  });
}
