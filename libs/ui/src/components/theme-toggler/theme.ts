import { Injectable, afterNextRender, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScTheme {
  value = signal<'light' | 'dark' | undefined>(undefined);

  init() {
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
