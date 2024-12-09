import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

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
  side = input.required<'left' | 'right'>();
  variant = input.required<'sidebar' | 'floating' | 'inset'>();
  collapsible = input.required<'offcanvas' | 'icon' | 'none'>();
  sidebarWidth = input.required<number>();
  isMobile = input.required<boolean>();
}
