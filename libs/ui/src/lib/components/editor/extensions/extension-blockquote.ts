import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SiQuoteIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-blockquote',
  imports: [ScTooltip, ScToggle, SiQuoteIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleBlockquote()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg si-quote-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionBlockquote {
  ariaLabel = 'Toggle blockquote';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.blockquote.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleBlockquote() {
    this.editor.chain().focus().toggleBlockquote().run();
  }
}
