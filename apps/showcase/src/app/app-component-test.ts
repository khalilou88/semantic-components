import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root-test',
  imports: [CommonModule, NgFor, NgIf],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
      <!-- Sidebar -->
      <aside
        class="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-4"
      >
        <div class="flex items-center gap-2 mb-8">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">UI</span>
          </div>
          <h1 class="text-xl font-bold dark:text-white">UI Library</h1>
        </div>

        <nav class="space-y-1">
          <a
            *ngFor="let item of navigationItems"
            [class]="
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm ' +
              (currentSection === item.id
                ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700')
            "
            (click)="currentSection = item.id"
          >
            {{ item.name }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="ml-64 p-8">
        <!-- Typography Section -->
        <section class="space-y-8" *ngIf="currentSection === 'typography'">
          <div class="prose dark:prose-invert max-w-none">
            <h1>Typography</h1>
            <p class="text-slate-600 dark:text-slate-400">
              Our type scale is designed for optimal readability and hierarchy.
            </p>
          </div>

          <div class="grid gap-8">
            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <div class="space-y-4">
                <h1 class="text-4xl font-bold">Heading 1</h1>
                <h2 class="text-3xl font-bold">Heading 2</h2>
                <h3 class="text-2xl font-bold">Heading 3</h3>
                <h4 class="text-xl font-bold">Heading 4</h4>
                <h5 class="text-lg font-bold">Heading 5</h5>
                <h6 class="text-base font-bold">Heading 6</h6>
              </div>
            </div>

            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <div class="space-y-4">
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Small Text - For captions and helper text
                </p>
                <p class="text-base text-slate-600 dark:text-slate-400">
                  Base Text - For general content and body copy
                </p>
                <p class="text-lg text-slate-600 dark:text-slate-400">
                  Large Text - For emphasized content
                </p>
                <p class="text-xl text-slate-600 dark:text-slate-400">
                  Extra Large - For important content
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Buttons Section -->
        <section class="space-y-8" *ngIf="currentSection === 'buttons'">
          <div class="prose dark:prose-invert max-w-none">
            <h1>Buttons</h1>
            <p class="text-slate-600 dark:text-slate-400">
              Our button components are designed to be flexible and consistent.
            </p>
          </div>

          <div class="grid gap-8">
            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Primary Buttons</h3>
              <div class="flex flex-wrap gap-4">
                <button
                  class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Primary
                </button>
                <button
                  class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Success
                </button>
                <button
                  class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Danger
                </button>
              </div>
            </div>

            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Outlined Buttons</h3>
              <div class="flex flex-wrap gap-4">
                <button
                  class="px-4 py-2 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
                >
                  Primary
                </button>
                <button
                  class="px-4 py-2 border-2 border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors"
                >
                  Success
                </button>
                <button
                  class="px-4 py-2 border-2 border-red-600 text-red-600 dark:border-red-400 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                  Danger
                </button>
              </div>
            </div>

            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Soft Buttons</h3>
              <div class="flex flex-wrap gap-4">
                <button
                  class="px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-500/20 transition-colors"
                >
                  Primary
                </button>
                <button
                  class="px-4 py-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-500/20 transition-colors"
                >
                  Success
                </button>
                <button
                  class="px-4 py-2 bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-500/20 transition-colors"
                >
                  Danger
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Cards Section -->
        <section class="space-y-8" *ngIf="currentSection === 'cards'">
          <div class="prose dark:prose-invert max-w-none">
            <h1>Cards</h1>
            <p class="text-slate-600 dark:text-slate-400">
              Cards are versatile containers for related content.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Simple Card -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Simple Card</h3>
                <p class="text-slate-600 dark:text-slate-400">
                  A basic card with title and content.
                </p>
              </div>
            </div>

            <!-- Card with Image -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&q=80"
                alt="Abstract"
              />
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Card with Image</h3>
                <p class="text-slate-600 dark:text-slate-400">A card featuring an image header.</p>
              </div>
            </div>

            <!-- Interactive Card -->
            <div
              class="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Interactive Card</h3>
                <p class="text-slate-600 dark:text-slate-400">A card with hover effects.</p>
                <button
                  class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Forms Section -->
        <section class="space-y-8" *ngIf="currentSection === 'forms'">
          <div class="prose dark:prose-invert max-w-none">
            <h1>Form Elements</h1>
            <p class="text-slate-600 dark:text-slate-400">
              Form components designed for optimal user experience.
            </p>
          </div>

          <div class="grid gap-8">
            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Text Inputs</h3>
              <div class="grid gap-4 max-w-md">
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Default Input
                  </label>
                  <input
                    class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    type="text"
                    placeholder="Enter text..."
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Disabled Input
                  </label>
                  <input
                    class="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg cursor-not-allowed"
                    type="text"
                    disabled
                    placeholder="Disabled input"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    With Error
                  </label>
                  <input
                    class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="text"
                    placeholder="Error state..."
                  />
                  <p class="mt-1 text-sm text-red-500">This field is required</p>
                </div>
              </div>
            </div>

            <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Select & Checkbox</h3>
              <div class="grid gap-4 max-w-md">
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Select Input
                  </label>
                  <select
                    class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div class="flex items-center gap-2">
                  <input
                    class="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                    id="checkbox"
                    type="checkbox"
                  />
                  <label class="text-sm text-slate-700 dark:text-slate-300" for="checkbox">
                    Checkbox example
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        color: rgb(15 23 42);
      }

      @media (prefers-color-scheme: dark) {
        :host {
          color: rgb(241 245 249);
        }
      }
    `,
  ],
})
export class AppComponentTest {
  currentSection = 'typography';

  navigationItems = [
    { id: 'typography', name: 'Typography' },
    { id: 'buttons', name: 'Buttons' },
    { id: 'cards', name: 'Cards' },
    { id: 'forms', name: 'Forms' },
  ];
}
