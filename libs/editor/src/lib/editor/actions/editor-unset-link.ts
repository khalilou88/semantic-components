import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScToggle, ScTooltip } from '@semantic-components/ui';
import { SiUnlinkIcon } from '@semantic-icons/lucide-icons';

import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-unset-link',
  imports: [ScTooltip, ScToggle, SiUnlinkIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="unsetLink()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg si-unlink-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorUnsetLink {
  ariaLabel = 'Unset Link';

  private readonly parent = inject(ScEditor);
  dialog = inject(Dialog);

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.unsetLink.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  unsetLink() {
    this.editor.chain().focus().unsetLink().run();
  }
}
