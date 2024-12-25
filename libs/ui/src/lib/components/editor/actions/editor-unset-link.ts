import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgUnlinkIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-unset-link',
  imports: [ScTooltip, ScToggle, SvgUnlinkIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="unsetLink()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-unlink-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorUnsetLink {
  ariaLabel = 'Unset Link';

  private readonly parent = inject(ScEditor, { host: true });
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
