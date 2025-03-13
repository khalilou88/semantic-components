import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import {
  ScSidebar,
  ScSidebarContent,
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
    ScSidebarContent,
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
        <sc-sidebar-content>
          <!--sc-sidebar-group>
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
        </sc-sidebar-group-->

          <sc-sidebar-group>
            <sc-sidebar-group-label>Components</sc-sidebar-group-label>

            <div sc-sidebar-group-content>
              <ul sc-sidebar-menu>
                <li sc-sidebar-menu-item>
                  <a routerLink="../components/editor" sc-sidebar-menu-link>
                    <span>Editor</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/carousel" sc-sidebar-menu-link>
                    <span>Carousel</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/sheet" sc-sidebar-menu-link>
                    <span>Sheet</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/paginator" sc-sidebar-menu-link>
                    <span>Paginator</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/calendar" sc-sidebar-menu-link>
                    <span>Calendar</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/date-picker" sc-sidebar-menu-link>
                    <span>Date Picker</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/button" sc-sidebar-menu-link>
                    <span>Button</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/table" sc-sidebar-menu-link>
                    <span>Table</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/toast" sc-sidebar-menu-link>
                    <span>Toast</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/chart" sc-sidebar-menu-link>
                    <span>Chart</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/menu" sc-sidebar-menu-link>
                    <span>Menu</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/context-menu" sc-sidebar-menu-link>
                    <span>Context Menu</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/menu-bar" sc-sidebar-menu-link>
                    <span>Menu Bar</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/link" sc-sidebar-menu-link>
                    <span>Link</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/badge" sc-sidebar-menu-link>
                    <span>Badge</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/input-password" sc-sidebar-menu-link>
                    <span>Input Password</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/input-number-group" sc-sidebar-menu-link>
                    <span>Input Number</span>
                  </a>
                </li>

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/input-group" sc-sidebar-menu-link>
                    <span>Input Group</span>
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

                <li sc-sidebar-menu-item>
                  <a routerLink="../components/switch" sc-sidebar-menu-link>
                    <span>Switch</span>
                  </a>
                </li>
              </ul>
            </div>
          </sc-sidebar-group>
        </sc-sidebar-content>
      </sc-sidebar>

      <main class="w-full">
        <div class="sticky top-0 z-40">
          <button sc-sidebar-toggler>
            <svg si-panel-left-icon></svg>
          </button>
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
