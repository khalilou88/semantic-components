import { Injectable, afterNextRender, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScTheme {
  value = signal<'light' | 'dark' | undefined>(undefined);

  constructor() {
    effect(() => {
      if (this.value() !== undefined) {
        localStorage['theme'] = this.value();
      }

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      document.documentElement.classList.toggle('dark', this.value() === 'dark');
    });
  }

  init() {
    afterNextRender(() => {
      const localStorageTheme = localStorage['theme'];
      const isDarkMode =
        localStorageTheme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDarkMode) {
        this.value.set('dark');
      } else {
        this.value.set('light');
      }
    });
  }
}
