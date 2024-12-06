import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, CdkAccordionModule],
  selector: 'app-root',
  template: `
    <div class="h-full bg-gray-50 antialiased dark:bg-gray-900">
      <nav
        class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              class="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <svg
                class="size-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden size-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Toggle sidebar</span>
            </button>
            <a class="mr-4 flex items-center justify-between" href="#">
              <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Semantic Components
              </span>
            </a>
          </div>
        </div>
      </nav>

      <!-- Sidebar -->

      <aside
        class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-14 transition-transform md:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
        id="drawer-navigation"
        aria-label="Sidenav"
      >
        <div class="h-full overflow-y-auto bg-white px-3 py-5 dark:bg-gray-800">
          <form class="mb-2 md:hidden" action="#" method="GET">
            <label class="sr-only" for="sidebar-search">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="size-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="sidebar-search"
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
          </form>
          <ul class="space-y-2">
            <li>
              <cdk-accordion>
                <cdk-accordion-item #item="cdkAccordionItem">
                  <button
                    class="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    (click)="item.toggle()"
                    type="button"
                    aria-controls="dropdown-sales"
                    data-collapse-toggle="dropdown-sales"
                  >
                    <span class="ml-3 flex-1 whitespace-nowrap text-left">Components</span>
                    <svg
                      class="size-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    class="space-y-2 py-2"
                    id="dropdown-sales"
                    [style.display]="item.expanded ? '' : 'none'"
                  >
                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/editor"
                      >
                        Editor
                      </a>
                    </li>

                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/tooltip"
                      >
                        Tooltip
                      </a>
                    </li>

                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/paginator"
                      >
                        Paginator
                      </a>
                    </li>

                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/theme-toggler"
                      >
                        Theme toggler
                      </a>
                    </li>

                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/dropdown"
                      >
                        Dropdown
                      </a>
                    </li>
                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/nav"
                      >
                        Nav
                      </a>
                    </li>
                    <li>
                      <a
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        routerLink="/date-picker"
                      >
                        Date picker
                      </a>
                    </li>
                  </ul>
                </cdk-accordion-item>
              </cdk-accordion>
            </li>
          </ul>
        </div>
      </aside>

      <main class="h-full p-4 pt-20 md:ml-64">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'showcase';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit() {
    document.documentElement.classList.add('h-full');
    this.document.body.classList.add('h-full');
  }
}
