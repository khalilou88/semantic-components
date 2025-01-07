import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SiMinusIcon } from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions/extensions';

@Component({
  selector: 'sc-editor-horizontal-rule',
  imports: [ScTooltip, ScToggle, SiMinusIcon],
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      (click)="setHorizontalRule()"
      sc-toggle
      variant="outline"
      type="button"
    >
      <svg si-minus-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorHorizontalRule {
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
