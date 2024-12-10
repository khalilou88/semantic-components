import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgRedoIcon, SvgUndoIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-history',
  imports: [ScTooltip, ScToggle, SvgUndoIcon, SvgRedoIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel1"
      [scTooltip]="ariaLabel1"
      (click)="undo()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-undo-icon />
      <span class="sr-only">{{ ariaLabel1 }}</span>
    </button>

    <button
      [attr.aria-label]="ariaLabel2"
      [scTooltip]="ariaLabel2"
      (click)="redo()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-redo-icon />
      <span class="sr-only">{{ ariaLabel2 }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionHistory {
  ariaLabel1 = 'Undo';
  ariaLabel2 = 'Redo';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.history.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  undo() {
    this.editor.chain().focus().undo().run();
  }

  redo() {
    this.editor.chain().focus().redo().run();
  }
}
