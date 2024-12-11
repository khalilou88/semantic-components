import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { SidebarContainer } from '../components/sidebar-container';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header, SidebarContainer, Sidebar],
  template: `
    <app-sidebar-container>
      <app-sidebar />

      <main>
        <app-header />
        <router-outlet></router-outlet>
      </main>
    </app-sidebar-container>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
