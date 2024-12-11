import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../utils';
import { ScSidebarState } from './sidebar-state';
import { ScSidebarToggler } from './sidebar-toggler';

const sidebarStates = cva(
  'absolute top-0 h-full left-0 bg-sidebar text-sidebar-foreground border-4 border-indigo-500/100',
  {
    variants: {
      state: {
        close: 'hidden',
        open: 'z-50',
      },
    },
    defaultVariants: {
      state: 'close',
    },
  },
);

type SidebarStates = VariantProps<typeof sidebarStates>;

@Component({
  selector: 'sc-sidebar',
  imports: [ScSidebarToggler],
  template: `
    <sc-sidebar-toggler />

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

  state = computed<SidebarStates['state']>(() => {
    return this.sidebarState.open() ? 'open' : 'close';
  });

  class = input<string>('');

  classes = computed(() => cn(sidebarStates({ state: this.state() }), this.class()));

  sidebarWidth = computed<number>(() => {
    if (this.sidebarState.open()) {
      return 18; //"18rem"
    }

    return 0;
  });
}
