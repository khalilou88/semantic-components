import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgBoldIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-bold',
  imports: [ScTooltip, ScToggle, SvgBoldIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleBold()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-bold-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionBold {
  ariaLabel = 'Toggle Bold';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.bold.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleBold() {
    this.editor.chain().focus().toggleBold().run();
  }
}
