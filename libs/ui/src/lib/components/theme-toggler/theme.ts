import { DOCUMENT, Injectable, afterNextRender, computed, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScTheme {
  private readonly document = inject<Document>(DOCUMENT);

  private readonly isDarkModeSignal = signal<boolean>(false);

  readonly isDarkMode = computed(() => this.isDarkModeSignal());

  readonly theme = computed<'light' | 'dark'>(() => {
    return this.isDarkMode() ? 'dark' : 'light';
  });

  constructor() {
    afterNextRender(() => {
      // Initialize theme from localStorage or system preference
      this.initializeTheme();
    });
  }

  private initializeTheme(): void {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isDarkModeSignal.set(savedTheme === 'dark');
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkModeSignal.set(prefersDark);
    }

    // Apply the theme
    this.applyTheme(this.isDarkMode());
  }

  toggleTheme(): void {
    this.isDarkModeSignal.update((t) => !t);
    this.applyTheme(this.isDarkMode());
    localStorage.setItem('theme', this.theme());
  }

  private applyTheme(isDark: boolean): void {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    this.document.documentElement.classList.toggle('dark', isDark);
  }
}
