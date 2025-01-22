import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ShikiService } from './shiki.service';

@Component({
  selector: 'sc-code-highlighter',
  imports: [],
  template: `
    <pre [innerHTML]="highlightedCode"></pre>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeHighlighter implements OnInit {
  code = input.required<string>();
  language = input('html');
  theme = input('github-dark');

  highlightedCode: SafeHtml = '';

  constructor(
    private readonly shikiService: ShikiService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  async ngOnInit() {
    const highlighted = await this.shikiService.highlightCode(this.code(), this.language());
    this.highlightedCode = this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
