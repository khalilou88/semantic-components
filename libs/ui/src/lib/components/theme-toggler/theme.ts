import { DOCUMENT } from '@angular/common';
import { Injectable, afterNextRender, effect, inject, signal } from '@angular/core';

import { LocalStorage } from './local-storage';

@Injectable({
  providedIn: 'root',
})
export class ScTheme {
  private readonly document = inject<Document>(DOCUMENT);

  private readonly localStorage = inject(LocalStorage);

  value = signal<'light' | 'dark' | undefined>(undefined);

  constructor() {
    effect(() => {
      if (this.value() !== undefined) {
        localStorage['theme'] = this.value();
      }

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      this.document.documentElement.classList.toggle('dark', this.value() === 'dark');
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
