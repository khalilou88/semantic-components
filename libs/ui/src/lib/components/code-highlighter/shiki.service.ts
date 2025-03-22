import { Injectable } from '@angular/core';

import { Highlighter, createHighlighter } from 'shiki';

import { LangType, ThemeType, langsArray, themesArray } from './types';

@Injectable({
  providedIn: 'root',
})
export class ShikiService {
  private highlighter: Highlighter | null = null;

  async initializeHighlighter() {
    if (!this.highlighter) {
      this.highlighter = await createHighlighter({
        themes: [...themesArray],
        langs: [...langsArray],
      });
    }
    return this.highlighter;
  }

  async highlightCode(code: string, language: LangType, theme: ThemeType) {
    const highlighter = await this.initializeHighlighter();
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: theme,
    });
  }
}
