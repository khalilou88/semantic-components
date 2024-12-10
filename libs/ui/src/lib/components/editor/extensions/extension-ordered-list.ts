import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgListOrderedIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-ordered-list',
  imports: [ScTooltip, ScToggle, SvgListOrderedIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleOrderedList()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg-list-ordered-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionOrderedList {
  ariaLabel = 'Toggle ordered list';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.orderedList.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleOrderedList() {
    this.editor.chain().focus().toggleOrderedList().run();
  }
}
