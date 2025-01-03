import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  ScSidebar,
  ScSidebarProvider,
  ScSidebarState,
  ScSidebarToggler,
} from '@semantic-components/ui';
import { SiPanelLeftIcon } from '@semantic-icons/lucide-icons';

import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterModule, ScSidebarProvider, ScSidebar, ScSidebarToggler, SiPanelLeftIcon],
  template: `
    <!--div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex min-h-screen">
        <app-sidebar />
        <div class="flex-1" [style.marginTop.px]="layoutState.headerHeight()">
          <router-outlet />
        </div>
      </div>
    </div-->

    <sc-sidebar-provider>
      <sc-sidebar>
        <div class="border-2 border-red-600">Sidebar</div>
      </sc-sidebar>

      <main class="w-full">
        <div class="sticky top-0 z-50">
          <sc-sidebar-toggler>
            <svg si-panel-left-icon></svg>
          </sc-sidebar-toggler>
        </div>
        <router-outlet />
      </main>
    </sc-sidebar-provider>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarLayout {
  layoutState = inject(LayoutState);

  sidebarState = inject(ScSidebarState);
}
