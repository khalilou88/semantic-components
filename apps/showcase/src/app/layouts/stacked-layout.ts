import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScThemeToggler } from '@semantic-components/ui';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, ScThemeToggler],
  template: `
    <div class="flex content-between items-center">
      <img class="size-6" src="logo.png" />

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
        <div class="absolute left-0 top-full flex justify-center"></div>
      </nav>

      <sc-theme-toggler />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
