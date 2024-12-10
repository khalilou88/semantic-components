import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgMinusIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-horizontal-rule',
  imports: [ScTooltip, ScToggle, SvgMinusIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="setHorizontalRule()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg-minus-icon />
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionHorizontalRule {
  ariaLabel = 'Toggle Horizontal Rule';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.horizontalRule.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setHorizontalRule() {
    this.editor.chain().focus().setHorizontalRule().run();
  }
}
