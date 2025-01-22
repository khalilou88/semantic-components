import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ShikiService } from './shiki.service';

@Component({
  selector: 'sc-code-highlighter',
  imports: [],
  template: `
    <div class="code-block" [innerHTML]="highlightedCode()"></div>
  `,
  styles: `
    .code-block {
      background: #24292e;
      border-radius: 6px;
      padding: 16px;
      padding-bottom: 40px;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeHighlighter implements OnInit {
  code = input.required<string>();
  language = input('angular-html');
  theme = input('github-dark');

  highlightedCode = signal<SafeHtml>('');

  constructor(
    private readonly shikiService: ShikiService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  async ngOnInit() {
    const highlighted = await this.shikiService.highlightCode(this.code(), this.language());
    this.highlightedCode.set(this.sanitizer.bypassSecurityTrustHtml(highlighted));
  }
}
