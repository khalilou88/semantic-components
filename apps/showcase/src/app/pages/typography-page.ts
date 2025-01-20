import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-typography-page',
  imports: [],
  template: `
    <section class="space-y-8">
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TypographyPage {}
