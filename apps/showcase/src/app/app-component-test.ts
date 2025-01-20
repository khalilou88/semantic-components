import { Component } from '@angular/core';

@Component({
  selector: 'app-root-test',
  imports: [],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
      <!-- Sidebar -->
      <aside
        class="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
      >
        <div class="mb-8 flex items-center gap-2">
          <div class="flex size-8 items-center justify-center rounded-lg bg-indigo-600">
            <span class="font-bold text-white">UI</span>
          </div>
          <h1 class="text-xl font-bold dark:text-white">UI Library</h1>
        </div>

        <nav class="space-y-1">
          @for (item of navigationItems; track item) {
            <button
              [class]="
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm ' +
                (currentSection === item.id
                  ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700')
              "
              (click)="currentSection = item.id"
            >
              {{ item.name }}
            </button>
          }
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="ml-64 p-8">
        <!-- Typography Section -->
        @if (currentSection === 'typography') {
          <section class="space-y-8">
            <div class="prose max-w-none dark:prose-invert">
              <h1>Typography</h1>
              <p class="text-slate-600 dark:text-slate-400">
                Our type scale is designed for optimal readability and hierarchy.
              </p>
            </div>
            <div class="grid gap-8">
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                <div class="space-y-4">
                  <h1 class="text-4xl font-bold">Heading 1</h1>
                  <h2 class="text-3xl font-bold">Heading 2</h2>
                  <h3 class="text-2xl font-bold">Heading 3</h3>
                  <h4 class="text-xl font-bold">Heading 4</h4>
                  <h5 class="text-lg font-bold">Heading 5</h5>
                  <h6 class="text-base font-bold">Heading 6</h6>
                </div>
              </div>
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
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
        }

        <!-- Buttons Section -->
        @if (currentSection === 'buttons') {
          <section class="space-y-8">
            <div class="prose max-w-none dark:prose-invert">
              <h1>Buttons</h1>
              <p class="text-slate-600 dark:text-slate-400">
                Our button components are designed to be flexible and consistent.
              </p>
            </div>
            <div class="grid gap-8">
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 class="mb-4 text-lg font-semibold">Primary Buttons</h3>
                <div class="flex flex-wrap gap-4">
                  <button
                    class="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
                  >
                    Primary
                  </button>
                  <button
                    class="rounded-lg bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
                  >
                    Success
                  </button>
                  <button
                    class="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
                  >
                    Danger
                  </button>
                </div>
              </div>
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 class="mb-4 text-lg font-semibold">Outlined Buttons</h3>
                <div class="flex flex-wrap gap-4">
                  <button
                    class="rounded-lg border-2 border-indigo-600 px-4 py-2 text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500/10"
                  >
                    Primary
                  </button>
                  <button
                    class="rounded-lg border-2 border-emerald-600 px-4 py-2 text-emerald-600 transition-colors hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-500/10"
                  >
                    Success
                  </button>
                  <button
                    class="rounded-lg border-2 border-red-600 px-4 py-2 text-red-600 transition-colors hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-500/10"
                  >
                    Danger
                  </button>
                </div>
              </div>
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 class="mb-4 text-lg font-semibold">Soft Buttons</h3>
                <div class="flex flex-wrap gap-4">
                  <button
                    class="rounded-lg bg-indigo-100 px-4 py-2 text-indigo-700 transition-colors hover:bg-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20"
                  >
                    Primary
                  </button>
                  <button
                    class="rounded-lg bg-emerald-100 px-4 py-2 text-emerald-700 transition-colors hover:bg-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                  >
                    Success
                  </button>
                  <button
                    class="rounded-lg bg-red-100 px-4 py-2 text-red-700 transition-colors hover:bg-red-200 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
                  >
                    Danger
                  </button>
                </div>
              </div>
            </div>
          </section>
        }

        <!-- Cards Section -->
        @if (currentSection === 'cards') {
          <section class="space-y-8">
            <div class="prose max-w-none dark:prose-invert">
              <h1>Cards</h1>
              <p class="text-slate-600 dark:text-slate-400">
                Cards are versatile containers for related content.
              </p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <!-- Simple Card -->
              <div class="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-slate-800">
                <div class="p-6">
                  <h3 class="mb-2 text-lg font-semibold">Simple Card</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    A basic card with title and content.
                  </p>
                </div>
              </div>
              <!-- Card with Image -->
              <div class="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-slate-800">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&q=80"
                  alt="Abstract"
                />
                <div class="p-6">
                  <h3 class="mb-2 text-lg font-semibold">Card with Image</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    A card featuring an image header.
                  </p>
                </div>
              </div>
              <!-- Interactive Card -->
              <div
                class="cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-slate-800"
              >
                <div class="p-6">
                  <h3 class="mb-2 text-lg font-semibold">Interactive Card</h3>
                  <p class="text-slate-600 dark:text-slate-400">A card with hover effects.</p>
                  <button
                    class="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        }

        <!-- Forms Section -->
        @if (currentSection === 'forms') {
          <section class="space-y-8">
            <div class="prose max-w-none dark:prose-invert">
              <h1>Form Elements</h1>
              <p class="text-slate-600 dark:text-slate-400">
                Form components designed for optimal user experience.
              </p>
            </div>
            <div class="grid gap-8">
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 class="mb-4 text-lg font-semibold">Text Inputs</h3>
                <div class="grid max-w-md gap-4">
                  <div>
                    <label
                      class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="id1"
                    >
                      Default Input
                    </label>
                    <input
                      class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-indigo-400"
                      id="id1"
                      type="text"
                      placeholder="Enter text..."
                    />
                  </div>
                  <div>
                    <label
                      class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="id2"
                    >
                      Disabled Input
                    </label>
                    <input
                      class="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                      id="id2"
                      type="text"
                      disabled
                      placeholder="Disabled input"
                    />
                  </div>
                  <div>
                    <label
                      class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="id3"
                    >
                      With Error
                    </label>
                    <input
                      class="w-full rounded-lg border border-red-500 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-900"
                      id="id3"
                      type="text"
                      placeholder="Error state..."
                    />
                    <p class="mt-1 text-sm text-red-500">This field is required</p>
                  </div>
                </div>
              </div>
              <div class="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 class="mb-4 text-lg font-semibold">Select & Checkbox</h3>
                <div class="grid max-w-md gap-4">
                  <div>
                    <label
                      class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="id4"
                    >
                      Select Input
                    </label>
                    <select
                      class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-indigo-400"
                      id="id4"
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div class="flex items-center gap-2">
                    <input
                      class="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      id="id5"
                      id="checkbox"
                      type="checkbox"
                    />
                    <label
                      class="text-sm text-slate-700 dark:text-slate-300"
                      for="id5"
                      for="checkbox"
                    >
                      Checkbox example
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
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
