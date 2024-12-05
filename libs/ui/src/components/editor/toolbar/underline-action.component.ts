import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'sc-underline-action',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="toggleUnderline()"
      type="button"
      scTooltip="Toggle underline"
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
          stroke-width="2"
          d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
        />
      </svg>
      <span class="sr-only">Underline</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderlineActionComponent {
  private readonly parent = inject(ScEditor, { host: true });

  extensionsService = inject(ExtensionsService);

  constructor() {
    this.extensionsService.underline.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleUnderline() {
    this.editor.chain().focus().toggleUnderline().run();
  }
}
