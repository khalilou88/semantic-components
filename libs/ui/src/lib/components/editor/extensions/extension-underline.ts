import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgUnderlineIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-underline',
  imports: [ScTooltip, SvgUnderlineIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="toggleUnderline()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-underline-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionUnderline {
  ariaLabel = 'Toggle underline';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.underline.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleUnderline() {
    this.editor.chain().focus().toggleUnderline().run();
  }
}
