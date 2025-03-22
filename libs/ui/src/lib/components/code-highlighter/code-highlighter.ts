import { ClipboardModule } from '@angular/cdk/clipboard';
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
import { SiCopyIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ShikiService, defaultThemes } from './shiki.service';

@Component({
  selector: 'sc-code-highlighter',
  imports: [ClipboardModule, SiCopyIcon, ScButton],
  template: `
    <div [innerHTML]="highlightedCode()"></div>

    <button class="absolute top-2 right-2" [cdkCopyToClipboard]="code()" sc-button variant="ghost">
      <svg class="h-4 w-4" si-copy-icon></svg>
    </button>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeHighlighter {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('block relative overflow-hidden', this.classInput()),
  );

  private readonly shikiService = inject(ShikiService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly code = input.required<string>();
  readonly language = input<'angular-ts' | 'angular-html' | 'typescript' | 'shellscript'>(
    'angular-html',
  );
  readonly theme = input(defaultThemes.light);

  protected readonly highlightedCode = signal<SafeHtml>('');

  constructor() {
    effect(async () => {
      const highlighted = await this.shikiService.highlightCode(this.code(), this.language());
      this.highlightedCode.set(this.sanitizer.bypassSecurityTrustHtml(highlighted));
    });
  }
}
