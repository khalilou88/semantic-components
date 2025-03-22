import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-introduction-page',
  imports: [],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-2xl font-semibold tracking-tight">Key Features</h2>
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

    <div class="space-y-8">
      <div class="text-sm font-medium text-muted-foreground">
        Designed with best practices in mind.
      </div>

      <div class="space-y-6">
        <div class="space-y-3">
          <h3 class="text-xl font-semibold tracking-tight">Install the following dependencies:</h3>

          <div class="relative">
            <pre
              class="text-sm overflow-x-auto rounded-lg border bg-background px-4 py-3 font-mono text-card-foreground whitespace-pre-wrap break-words"
            >
npm install &#64;radix-ui/react-icons tailwindcss-animate class-variance-authority clsx tailwind-merge</pre
            >
            <button
              class="absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-6 w-6"
            >
              <svg
                class="h-4 w-4"
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-xl font-semibold tracking-tight">Usage example:</h3>

          <div class="relative">
            <pre
              class="text-sm overflow-x-auto rounded-lg border bg-background px-4 py-3 font-mono text-card-foreground whitespace-pre-wrap break-words"
            ></pre>
            <button
              class="absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-6 w-6"
            >
              <svg
                class="h-4 w-4"
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-2xl font-semibold tracking-tight">Component Preview</h2>
          <p class="text-muted-foreground">Try out some of our components.</p>
        </div>
      </div>

      <div class="rounded-lg border bg-card p-6 shadow-sm">
        <div class="space-y-6">
          <div class="space-y-2">
            <h3 class="text-lg font-medium">Buttons</h3>
            <p class="text-sm text-muted-foreground">Different button variants.</p>
          </div>
          <div class="flex flex-wrap gap-4">
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Default
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2"
            >
              Destructive
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Outline
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
            >
              Secondary
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Ghost
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 underline underline-offset-4"
            >
              Link
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-2xl font-semibold tracking-tight">Key Features</h2>
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

    <div class="space-y-8">
      <div class="text-sm font-medium text-muted-foreground">
        Designed with best practices in mind.
      </div>

      <div class="space-y-6">
        <div class="space-y-3">
          <h3 class="text-xl font-semibold tracking-tight">Install the following dependencies:</h3>

          <div class="relative">
            <pre
              class="text-sm overflow-x-auto rounded-lg border bg-background px-4 py-3 font-mono text-card-foreground whitespace-pre-wrap break-words"
            >
npm install &#64;radix-ui/react-icons tailwindcss-animate class-variance-authority clsx tailwind-merge</pre
            >
            <button
              class="absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-6 w-6"
            >
              <svg
                class="h-4 w-4"
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-xl font-semibold tracking-tight">Usage example:</h3>

          <div class="relative">
            <pre
              class="text-sm overflow-x-auto rounded-lg border bg-background px-4 py-3 font-mono text-card-foreground whitespace-pre-wrap break-words"
            ></pre>
            <button
              class="absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-6 w-6"
            >
              <svg
                class="h-4 w-4"
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-2xl font-semibold tracking-tight">Component Preview</h2>
          <p class="text-muted-foreground">Try out some of our components.</p>
        </div>
      </div>

      <div class="rounded-lg border bg-card p-6 shadow-sm">
        <div class="space-y-6">
          <div class="space-y-2">
            <h3 class="text-lg font-medium">Buttons</h3>
            <p class="text-sm text-muted-foreground">Different button variants.</p>
          </div>
          <div class="flex flex-wrap gap-4">
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Default
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2"
            >
              Destructive
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Outline
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
            >
              Secondary
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Ghost
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 underline underline-offset-4"
            >
              Link
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IntroductionPage {}
