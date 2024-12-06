import { Injectable, afterNextRender, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScTheme {
  value = signal<'light' | 'dark' | undefined>(undefined);

  constructor() {
    console.log('effect');

    effect(() => {
      if (this.value() !== undefined) {
        localStorage['theme'] = this.value();
      }

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      document.documentElement.classList.toggle('dark', this.value() === 'dark');
    });
  }

  init() {
    console.log('init');
    afterNextRender(() => {
      const localStorageTheme = localStorage['theme'];
      const isDarkode =
        localStorageTheme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDarkode) {
        this.value.set('dark');
      } else {
        this.value.set('light');
      }
    });
  }
}
