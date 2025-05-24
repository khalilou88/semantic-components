import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { LinkData, ScAddLinkDialog } from '../toolbar/add-link-dialog';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-link',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="openDialog()"
      type="button"
      scTooltip="Add link"
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
          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
        />
      </svg>
      <span class="sr-only">Link</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionLink {
  private readonly parent = inject(ScEditor);
  dialog = inject(Dialog);

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.setLink.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  openDialog() {
    const dialogRef = this.dialog.open<LinkData>(ScAddLinkDialog, {
      minWidth: '600px',
    });

    dialogRef.closed.subscribe((result) => {
      this.editor
        .chain()
        .focus()
        .toggleLink({ href: result?.url ?? '' })
        .run();
    });
  }
}
