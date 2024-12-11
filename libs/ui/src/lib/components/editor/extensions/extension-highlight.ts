import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgHighlighterIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-highlight',
  imports: [ScTooltip, ScToggle, SvgHighlighterIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleHighlight()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-highlighter-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionHighlight {
  ariaLabel = 'Toggle Highlight';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.highlight.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleHighlight() {
    this.editor.chain().focus().toggleHighlight().run();
  }
}
