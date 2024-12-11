import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgListIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-bullet-list',
  imports: [ScTooltip, ScToggle, SvgListIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleBulletList()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-list-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionBulletList {
  ariaLabel = 'Toggle List';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.bulletList.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleBulletList() {
    this.editor.chain().focus().toggleBulletList().run();
  }
}
