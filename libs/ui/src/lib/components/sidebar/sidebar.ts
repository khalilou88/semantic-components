import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { SIDEBAR_WIDTH } from './constants';
import { ScSidebarContent } from './sidebar-content';
import { ScSidebarFooter } from './sidebar-footer';
import { ScSidebarHeader } from './sidebar-header';

@Component({
  selector: 'sc-sidebar',
  imports: [ScSidebarHeader, ScSidebarFooter, ScSidebarContent],
  template: `
    <sc-sidebar-header />
    <sc-sidebar-content />
    <sc-sidebar-footer />
  `,
  host: {
    '[style.width.rem]': 'sidebarWidth()',
    '[class.sc-sidebar-collapsible-none]': 'collapsible() === "none"',
    '[class.sc-sidebar-mobile]': 'isMobile()',
  },
  styles: `
    sc-sidebar {
      @apply flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow;
    }
    .sc-sidebar-collapsible-none {
      @apply flex h-full flex-col bg-sidebar text-sidebar-foreground;
    }
    .sc-sidebar-mobile {
      @apply bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebar {
  side = signal<'left' | 'right'>('left');
  variant = signal<'sidebar' | 'floating' | 'inset'>('sidebar');
  collapsible = signal<'offcanvas' | 'icon' | 'none'>('offcanvas');

  sidebarWidth = signal<number>(SIDEBAR_WIDTH);

  isMobile = signal<boolean>(false);

  // width = computed(() => {
  //   if (this.opened()) {
  //     return 256;
  //   } else {
  //     return 0;
  //   }
  // });
}
