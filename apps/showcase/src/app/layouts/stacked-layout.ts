import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '../components/header';
import { SidebarContainer } from '../components/sidebar-container';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header, SidebarContainer],
  template: `
    <app-sidebar-container>
      <app-header />

      <router-outlet></router-outlet>
    </app-sidebar-container>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
