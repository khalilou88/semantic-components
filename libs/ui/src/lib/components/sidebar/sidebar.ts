import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { ScSidebarContent } from './sidebar-content';
import { ScSidebarFooter } from './sidebar-footer';
import { ScSidebarHeader } from './sidebar-header';

const SIDEBAR_WIDTH = 16; //"16rem"
const SIDEBAR_WIDTH_MOBILE = 18; //"18rem"

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
  },
  styles: `
    sc-sidebar {
      @apply flex h-full flex-col bg-sidebar text-sidebar-foreground;
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

  // width = computed(() => {
  //   if (this.opened()) {
  //     return 256;
  //   } else {
  //     return 0;
  //   }
  // });
}
