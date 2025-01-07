import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SiUnderlineIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-underline',
  imports: [ScTooltip, SiUnderlineIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleUnderline()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg si-underline-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorUnderline {
  ariaLabel = 'Toggle underline';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.underline.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleUnderline() {
    this.editor.chain().focus().toggleUnderline().run();
  }
}
