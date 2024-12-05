import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'sc-ordered-list-action',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="toggleOrderedList()"
      type="button"
      smaTooltip="Toggle ordered list"
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
          d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"
        />
      </svg>
      <span class="sr-only">Toggle ordered list</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderedListActionComponent {
  private readonly parent = inject(ScEditor, { host: true });

  extensionsService = inject(ExtensionsService);

  constructor() {
    this.extensionsService.orderedList.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleOrderedList() {
    this.editor.chain().focus().toggleOrderedList().run();
  }
}
