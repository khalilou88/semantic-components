import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TocHeadingDirective } from '../../../components/toc/toc-heading.directive';

@Component({
  selector: 'app-introduction-page',
  imports: [TocHeadingDirective],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-2xl font-semibold tracking-tight" tocHeading>Key Features</h2>
          <p class="text-muted-foreground">Everything you need to build your UI.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <!-- Feature 1 -->
        <div class="bg-card rounded-lg border border-border p-4 shadow-sm">
          <div class="flex items-center gap-2">
            <div class="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <svg
                class="h-4 w-4 text-primary"
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium">Accessible</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            All components follow WAI-ARIA guidelines.
          </p>
        </div>
        <!-- Feature 2 -->
        <div class="bg-card rounded-lg border border-border p-4 shadow-sm">
          <div class="flex items-center gap-2">
            <div class="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <svg
                class="h-4 w-4 text-primary"
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
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                <line x1="16" x2="19" y1="8" y2="5"></line>
                <line x1="2" x2="5" y1="22" y2="19"></line>
              </svg>
            </div>
            <h3 class="text-lg font-medium">Themeable</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Themed with CSS variables for easy customization.
          </p>
        </div>
        <!-- Feature 3 -->
        <div class="bg-card rounded-lg border border-border p-4 shadow-sm">
          <div class="flex items-center gap-2">
            <div class="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <svg
                class="h-4 w-4 text-primary"
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
                <path
                  d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium">Composable</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Composable components for building complex UIs.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IntroductionPage {}
