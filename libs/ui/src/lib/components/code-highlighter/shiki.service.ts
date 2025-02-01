import { Injectable } from '@angular/core';

import { Highlighter, createHighlighter } from 'shiki';

@Injectable({
  providedIn: 'root',
})
export class ShikiService {
  private highlighter: Highlighter | null = null;

  async initializeHighlighter() {
    if (!this.highlighter) {
      this.highlighter = await createHighlighter({
        themes: ['github-dark'],
        langs: ['angular-html', 'typescript'], //TODO provider langs and themes
      });
    }
    return this.highlighter;
  }

  async highlightCode(code: string, language: string) {
    const highlighter = await this.initializeHighlighter();
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: 'github-dark',
    });
  }
}
