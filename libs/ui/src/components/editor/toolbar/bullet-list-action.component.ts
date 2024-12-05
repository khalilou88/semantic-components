import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'sc-bullet-list-action',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="toggleBulletList()"
      type="button"
      scTooltip="Toggle list"
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
          d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
        />
      </svg>
      <span class="sr-only">Toggle list</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletListActionComponent {
  private readonly parent = inject(ScEditor, { host: true });

  extensionsService = inject(ExtensionsService);

  constructor() {
    this.extensionsService.bulletList.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  toggleBulletList() {
    this.editor.chain().focus().toggleBulletList().run();
  }
}
