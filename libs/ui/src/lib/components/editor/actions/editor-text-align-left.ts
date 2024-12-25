import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgAlignLeftIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-text-align-left',
  imports: [ScTooltip, SvgAlignLeftIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="setLeftAlign()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg-align-left-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorTextAlignLeft {
  ariaLabel = 'Align left';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.textAlignLeft.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setLeftAlign() {
    this.editor.chain().focus().setTextAlign('left').run();
  }
}