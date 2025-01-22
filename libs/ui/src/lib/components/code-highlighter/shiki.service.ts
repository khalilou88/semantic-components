import { Injectable } from '@angular/core';

import { Highlighter, getHighlighter } from 'shiki';

@Injectable({
  providedIn: 'root',
})
export class ShikiService {
  private highlighter: Highlighter | null = null;

  async initializeHighlighter() {
    if (!this.highlighter) {
      this.highlighter = await getHighlighter({
        themes: ['github-dark'],
        langs: ['typescript', 'javascript', 'html', 'css'], // add languages you need
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
