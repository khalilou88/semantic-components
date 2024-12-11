import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import {
  SvgAlignCenterIcon,
  SvgAlignLeftIcon,
  SvgAlignRightIcon,
} from '@semantic-icons/lucide-icons';

import { ScToggle } from '../../toggle';
import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-text-align',
  imports: [ScTooltip, SvgAlignLeftIcon, SvgAlignRightIcon, SvgAlignCenterIcon, ScToggle],
  template: `
    <button
      [attr.aria-label]="ariaLabel1"
      [scTooltip]="ariaLabel1"
      (click)="setLeftAlign()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg-align-left-icon />
      <span class="sr-only">{{ ariaLabel1 }}</span>
    </button>

    <button
      [attr.aria-label]="ariaLabel2"
      [scTooltip]="ariaLabel2"
      (click)="setCenterAlign()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg-align-center-icon />
      <span class="sr-only">{{ ariaLabel2 }}</span>
    </button>

    <button
      [attr.aria-label]="ariaLabel3"
      [scTooltip]="ariaLabel3"
      (click)="setRightAlign()"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg-align-right-icon />
      <span class="sr-only">{{ ariaLabel3 }}</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionTextAlignAction {
  ariaLabel1 = 'Align left';
  ariaLabel2 = 'Align center';
  ariaLabel3 = 'Align right';

  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.textAlign.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setLeftAlign() {
    this.editor.chain().focus().setTextAlign('left').run();
  }

  setCenterAlign() {
    this.editor.chain().focus().setTextAlign('center').run();
  }

  setRightAlign() {
    this.editor.chain().focus().setTextAlign('right').run();
  }
}
