import { Injectable } from '@angular/core';

import { Highlighter, createHighlighter } from 'shiki';

export const availableThemes = {
  light: 'github-light',
  dark: 'github-dark',
};

@Injectable({
  providedIn: 'root',
})
export class ShikiService {
  private highlighter: Highlighter | null = null;

  async initializeHighlighter() {
    if (!this.highlighter) {
      this.highlighter = await createHighlighter({
        themes: [availableThemes.light, availableThemes.dark],
        langs: ['angular-ts', 'angular-html', 'typescript', 'shellscript'], //TODO provider langs and themes
      });
    }
    return this.highlighter;
  }

  async highlightCode(code: string, language: string, theme: string) {
    const highlighter = await this.initializeHighlighter();
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: theme,
    });
  }
}
