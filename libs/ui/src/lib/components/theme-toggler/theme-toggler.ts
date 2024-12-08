import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgMoonIcon, SvgSunIcon } from '@semantic-icons/tabler-icons/filled';

import { ScTheme } from './theme';

@Component({
  selector: 'sc-theme-toggler',
  imports: [SvgMoonIcon, SvgSunIcon],
  template: `
    <button
      class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      (click)="toggleTheme()"
      type="button"
    >
      @if (theme.value() === 'light') {
        <svg-moon-icon class="size-6" />
      }

      @if (theme.value() === 'dark') {
        <svg-sun-icon class="size-6" />
      }
    </button>
    <div
      class="invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
      role="tooltip"
    >
      Toggle dark mode
      <div class=" " data-popper-arrow></div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggler {
  theme = inject(ScTheme);

  toggleTheme() {
    if (this.theme.value() === 'light') {
      this.theme.value.set('dark');
    } else {
      this.theme.value.set('light');
    }
  }
}
