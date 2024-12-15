import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Sidebar } from '../components/sidebar';
import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterModule, Sidebar],
  template: `
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex min-h-screen">
        <app-sidebar />
        <div class="flex-1" [style.marginTop.px]="layoutState.headerHeight()">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarLayout {
  layoutState = inject(LayoutState);
}
