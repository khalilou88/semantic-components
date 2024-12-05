import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions';

@Component({
  selector: 'sc-text-align-action',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="setLeftAlign()"
      type="button"
      scTooltip="Align left"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
        />
      </svg>
      <span class="sr-only">Align left</span>
    </button>

    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="setCenterAlign()"
      type="button"
      scTooltip="Align center"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 6h8M6 10h12M8 14h8M6 18h12"
        />
      </svg>
      <span class="sr-only">Align center</span>
    </button>

    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="setRightAlignButton()"
      type="button"
      scTooltip="Align right"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 6h-8m8 4H6m12 4h-8m8 4H6"
        />
      </svg>
      <span class="sr-only">Align right</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAlignActionComponent {
  private readonly parent = inject(ScEditor, { host: true });

  extensionsService = inject(ScExtensions);

  constructor() {
    this.extensionsService.textAlign.set(true);
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

  setRightAlignButton() {
    this.editor.chain().focus().setTextAlign('right').run();
  }
}
