import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HighlightService } from './highlight.service';

@Component({
  selector: 'sc-code-highlighter',
  imports: [],
  template: `
    @if (highlightedCode()) {
      <pre [innerHTML]="highlightedCode()"></pre>
    } @else {
      <div class="loading">Loading...</div>
    }
  `,
  styles: `
    pre {
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }
    .loading {
      padding: 1rem;
      color: #666;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeHighlighter implements OnInit {
  code = input.required<string>();
  language = input('typescript');
  theme = input('nord');

  constructor(
    private readonly highlightService: HighlightService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  async ngOnInit() {
    await this.highlightService.loadHighlighter();
  }

  //highlightedCode: SafeHtml | null = null;
  highlightedCode = computed(() => {
    console.log(this.code());
    console.log(this.highlightService.highlighter);

    const highlighter = this.highlightService.highlighter;

    if (highlighter === null) {
      console.error('Failed to load highlighter');
    }

    const highlighted = highlighter!.codeToHtml(this.code(), {
      lang: this.language(),
      theme: this.theme(),
    });

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  });
}
