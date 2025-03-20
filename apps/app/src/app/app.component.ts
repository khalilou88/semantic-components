import { Component, signal } from '@angular/core';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

@Component({
  imports: [Header, Sidebar, Footer],
  selector: 'app-root',
  template: `
    <div class="flex min-h-screen flex-col max-w-screen-2xl mx-auto">
      <!-- Navigation -->

      <header
        class="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <app-header />
      </header>

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
                        <div
                          class="flex items-center justify-center size-8 rounded-full bg-primary/10"
                        >
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
                        <div
                          class="flex items-center justify-center size-8 rounded-full bg-primary/10"
                        >
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
                              d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"
                            ></path>
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
                        <div
                          class="flex items-center justify-center size-8 rounded-full bg-primary/10"
                        >
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
                      <h3 class="text-xl font-semibold tracking-tight">
                        Install the following dependencies:
                      </h3>

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
                            <path
                              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                            ></path>
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
                            <path
                              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                            ></path>
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
              </div>
            </div>

            <!-- Table of Contents -->
            <div
              class="hidden lg:block sticky top-14 h-[calc(100vh-56px)] w-[240px] flex-shrink-0 overflow-y-auto  py-6 pl-8 pr-4"
            >
              <div class="mb-4">
                <h4 class="text-sm font-medium">On This Page</h4>
                <ul class="mt-2 space-y-2 text-sm">
                  <li>
                    <a class="text-muted-foreground hover:text-foreground" href="#">Introduction</a>
                  </li>
                  <li>
                    <a class="text-muted-foreground hover:text-foreground" href="#">Key Features</a>
                  </li>
                  <li>
                    <a class="text-muted-foreground hover:text-foreground" href="#">Installation</a>
                  </li>
                  <li>
                    <a class="text-muted-foreground hover:text-foreground" href="#">Usage</a>
                  </li>
                  <li>
                    <a class="text-muted-foreground hover:text-foreground" href="#">
                      Component Preview
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      <!-- Footer -->
      <footer class="py-6 md:px-8 md:py-0 border-t border-border/40">
        <app-footer />
      </footer>
    </div>
  `,
  styles: '',
})
export class AppComponent {
  protected readonly class = signal('min-h-screen bg-background text-foreground');
}
