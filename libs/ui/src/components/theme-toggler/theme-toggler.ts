import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
  effect,
  signal,
} from '@angular/core';

import { SvgMoonIcon, SvgSunIcon } from '@semantic-icons/tabler-icons/filled';

@Component({
  selector: 'sc-theme-toggler',
  imports: [SvgMoonIcon, SvgSunIcon],
  template: `
    <button
      class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      (click)="toggleTheme()"
      type="button"
    >
      @if (theme() === 'light') {
        <svg-moon-icon class="size-6" />
      }

      @if (theme() === 'dark') {
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
  theme = signal<'init' | 'light' | 'dark'>('init');

  constructor() {
    effect(() => {
      if (this.theme() !== 'init') {
        localStorage['theme'] = this.theme();
      }

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      document.documentElement.classList.toggle('dark', this.theme() === 'dark');
    });

    afterNextRender(() => {
      const localStorageTheme = localStorage['theme'];
      const isDarkode =
        localStorageTheme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDarkode) {
        this.theme.set('dark');
      } else {
        this.theme.set('light');
      }
    });
  }

  toggleTheme() {
    if (this.theme() === 'light') {
      this.theme.set('dark');
    } else {
      this.theme.set('light');
    }
  }
}
