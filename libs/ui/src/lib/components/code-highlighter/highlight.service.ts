import { Injectable } from '@angular/core';

import { Highlighter, createHighlighter } from 'shiki';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  highlighter: Highlighter | null = null;

  async loadHighlighter(): Promise<void> {
    if (this.highlighter !== null) {
      return;
    }

    try {
      this.highlighter = await createHighlighter({
        themes: ['nord'],
        langs: ['html'],
      });
    } catch (error) {
      console.error('Failed to initialize highlighter:', error);
    }
  }
}
