import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from '../components/sidebar';
import { TableOfContents } from '../components/table-of-contents';

@Component({
  selector: 'app-doc-layout',
  imports: [Sidebar, RouterOutlet, TableOfContents],
  template: `
    <div class="flex-1 flex">
      <!-- Sidebar -->
      <div
        class="hidden md:flex border-r border-border/40 w-[240px] flex-shrink-0 md:sticky md:top-14 md:h-[calc(100vh-56px)] md:overflow-y-auto"
      >
        <app-sidebar />
      </div>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Mobile Menu Toggle -->
        <div class="flex md:hidden items-center justify-between p-4 border-b border-border/40">
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            <svg
              class="h-4 w-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            Menu
          </button>
          <div class="flex items-center space-x-2">
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3v18"></path>
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
            </button>
          </div>
        </div>

        <!-- Table of Contents & Content -->
        <div class="flex flex-col lg:flex-row">
          <div class="flex-1 px-4 pt-6 pb-8 lg:px-8">
            <div class="mx-auto max-w-3xl space-y-10">
              <!-- Introduction -->
              <div class="space-y-2">
                <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
                <p class="text-xl text-muted-foreground">
                  Beautifully designed components built with Radix UI and Tailwind CSS.
                </p>
              </div>

              <router-outlet />
            </div>
          </div>

          <!-- Table of Contents -->
          <div
            class="hidden lg:block sticky top-14 h-[calc(100vh-56px)] w-[240px] flex-shrink-0 overflow-y-auto py-6 pl-8 pr-4"
          >
            <app-table-of-contents />
          </div>
        </div>
      </main>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DocLayout {}
