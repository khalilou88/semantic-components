import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { cn } from '@semantic-components/utils';

import { ShikiService, defaultThemes } from './shiki.service';

@Component({
  selector: 'sc-code-highlighter',
  imports: [],
  template: ``,
  host: {
    '[class]': 'class()',
    '[innerHTML]': 'highlightedCode()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeHighlighter {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  private readonly shikiService = inject(ShikiService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly code = input.required<string>();
  readonly language = input<'angular-html' | 'typescript'>('angular-html');
  readonly theme = input(defaultThemes.light);

  protected readonly highlightedCode = signal<SafeHtml>('');

  constructor() {
    effect(async () => {
      const highlighted = await this.shikiService.highlightCode(this.code(), this.language());
      this.highlightedCode.set(this.sanitizer.bypassSecurityTrustHtml(highlighted));
    });
  }
}
