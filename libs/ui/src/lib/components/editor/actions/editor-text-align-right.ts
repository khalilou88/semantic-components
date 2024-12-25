import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgAlignRightIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-text-align-right',
  imports: [ScTooltip, SvgAlignRightIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="setRightAlign()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg-align-right-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorTextAlignRight {
  ariaLabel = 'Align right';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.textAlignRight.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setRightAlign() {
    this.editor.chain().focus().setTextAlign('right').run();
  }
}
