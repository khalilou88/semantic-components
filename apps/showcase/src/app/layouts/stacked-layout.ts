import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScSidebar, ScSidebarContainer } from '@semantic-components/ui';

import { Header } from '../components/header';
import { SidebarContent } from '../components/sidebar-content';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header, ScSidebarContainer, ScSidebar, SidebarContent],
  template: `
    <sc-sidebar-container>
      <sc-sidebar>
        <app-sidebar-content />
      </sc-sidebar>

      <main class="w-full bg-background">
        <app-header />
        <div class="mt-10">
          <router-outlet></router-outlet>
        </div>
      </main>
    </sc-sidebar-container>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
