import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import {
  ScSidebar,
  ScSidebarGroup,
  ScSidebarGroupContent,
  ScSidebarGroupLabel,
  ScSidebarMenu,
  ScSidebarMenuItem,
  ScSidebarMenuLink,
  ScSidebarProvider,
  ScSidebarState,
  ScSidebarToggler,
} from '@semantic-components/ui';
import { SiPanelLeftIcon } from '@semantic-icons/lucide-icons';

import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-sidebar-layout',
  imports: [
    ScSidebarProvider,
    ScSidebar,
    ScSidebarToggler,
    SiPanelLeftIcon,
    ScSidebarGroup,
    ScSidebarGroupContent,
    ScSidebarMenu,
    ScSidebarMenuItem,
    RouterLink,
    RouterOutlet,
    ScSidebarMenuLink,
    ScSidebarGroupLabel,
  ],
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
        <sc-sidebar-group>
          <sc-sidebar-group-label>Getting Started</sc-sidebar-group-label>

          <div sc-sidebar-group-content>
            <ul sc-sidebar-menu>
              <li sc-sidebar-menu-item>
                <a routerLink="../getting-started/installation" sc-sidebar-menu-link>
                  <span>Installation</span>
                </a>
              </li>
            </ul>
          </div>
        </sc-sidebar-group>

        <sc-sidebar-group>
          <sc-sidebar-group-label>Components</sc-sidebar-group-label>

          <div sc-sidebar-group-content>
            <ul sc-sidebar-menu>
              <li sc-sidebar-menu-item>
                <a routerLink="../components/button" sc-sidebar-menu-link>
                  <span>Button</span>
                </a>
              </li>

              <li sc-sidebar-menu-item>
                <a routerLink="../components/input-otp" sc-sidebar-menu-link>
                  <span>Input OTP</span>
                </a>
              </li>

              <li sc-sidebar-menu-item>
                <a routerLink="../components/checkbox" sc-sidebar-menu-link>
                  <span>Checkbox</span>
                </a>
              </li>
            </ul>
          </div>
        </sc-sidebar-group>
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
