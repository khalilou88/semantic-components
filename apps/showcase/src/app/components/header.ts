import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton, ScThemeToggler } from '@semantic-components/ui';
import { SvgGithubIcon, SvgMenuIcon, SvgXIcon } from '@semantic-icons/lucide-icons';
import { ScSidebarState } from 'libs/ui/src/lib/components/sidebar/sidebar-state';

@Component({
  selector: 'app-header',
  imports: [ScThemeToggler, SvgGithubIcon, ScButton, SvgMenuIcon, SvgXIcon],
  template: `
    <div class="sticky top-0 border-b-2">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              (click)="toggle()"
              sc-button
              variant="ghost"
              size="icon"
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              @if (sidebarState.open()) {
                <svg-x-icon />
              }

              @if (!sidebarState.open()) {
                <svg-menu-icon />
              }
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center">
              <img class="h-8 w-auto" src="logo.png" alt="Your Company" />
            </div>

            <div class="hidden sm:ml-6 sm:block">
              <nav
                class="relative z-10 flex max-w-max flex-1 items-center justify-center"
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
              >
                <div style="position: relative;">
                  <ul
                    class="group flex flex-1 list-none items-center justify-center space-x-1"
                    data-orientation="horizontal"
                    dir="ltr"
                  >
                    <li>
                      <button
                        class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                        id="radix-:r9j:-trigger-radix-:r9k:"
                        data-state="closed"
                        aria-expanded="false"
                        aria-controls="radix-:r9j:-content-radix-:r9k:"
                        data-radix-collection-item=""
                      >
                        Getting started
                        <svg
                          class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                        id="radix-:r9j:-trigger-radix-:r9l:"
                        data-state="closed"
                        aria-expanded="false"
                        aria-controls="radix-:r9j:-content-radix-:r9l:"
                        data-radix-collection-item=""
                      >
                        Components
                        <svg
                          class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <a
                        class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        href="/docs"
                        data-radix-collection-item=""
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              (click)="toggle()"
              sc-button
              variant="ghost"
              size="icon"
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              @if (sidebarState.open()) {
                <svg-x-icon />
              }

              @if (!sidebarState.open()) {
                <svg-menu-icon />
              }
            </button>

            <button sc-button variant="ghost" size="icon" type="button">
              <span class="sr-only">View notifications</span>

              <svg-github-icon />
            </button>

            <sc-theme-toggler />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  sidebarState = inject(ScSidebarState);

  toggle() {
    this.sidebarState.open.update((value) => !value);
  }
}
