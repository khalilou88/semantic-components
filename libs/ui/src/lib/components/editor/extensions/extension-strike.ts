import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SiStrikethroughIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-strike',
  imports: [ScTooltip, SiStrikethroughIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleStrike()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg si-strikethrough-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionStrike {
  ariaLabel = 'Toggle Strike';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.strike.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleStrike() {
    this.editor.chain().focus().toggleStrike().run();
  }
}
