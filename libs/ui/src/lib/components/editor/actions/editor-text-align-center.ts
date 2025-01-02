import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SiAlignCenterIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-text-align-center',
  imports: [ScTooltip, SiAlignCenterIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="setCenterAlign()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg si-align-center-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorTextAlignCenter {
  ariaLabel = 'Align center';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.textAlignCenter.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setCenterAlign() {
    this.editor.chain().focus().setTextAlign('center').run();
  }
}
