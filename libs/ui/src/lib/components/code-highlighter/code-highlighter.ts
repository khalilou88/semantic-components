import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { cn } from '@semantic-components/utils';

import { ShikiService } from './shiki.service';

@Component({
  selector: 'sc-code-highlighter',
  imports: [],
  template: ``,
  host: {
    '[class]': 'class()',
    '[innerHTML]': 'highlightedCode()',
  },
  styles: `
    pre {
      @apply pb-6 px-4 rounded-md;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeHighlighter implements OnInit {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  private readonly shikiService = inject(ShikiService);
  private readonly sanitizer = inject(DomSanitizer);

  code = input.required<string>();
  language = input<'angular-html' | 'typescript'>('angular-html');
  theme = input('github-dark');

  highlightedCode = signal<SafeHtml>('');

  async ngOnInit() {
    const highlighted = await this.shikiService.highlightCode(this.code(), this.language());
    this.highlightedCode.set(this.sanitizer.bypassSecurityTrustHtml(highlighted));
  }
}
