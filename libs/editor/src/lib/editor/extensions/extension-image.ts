import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton } from '@semantic-components/ui';
import { ScInput } from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';
import { ScPopoverTriggerFor } from '@semantic-components/ui';
import { ScToggle } from '@semantic-components/ui';
import { ScTooltip } from '@semantic-components/ui';
import { SiImagePlusIcon } from '@semantic-icons/lucide-icons';

import { ScEditor } from '../editor';
import { ImageData, ScAddImageDialog } from '../toolbar/add-image-dialog';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-image',
  imports: [
    ScTooltip,
    DialogModule,
    ScButton,
    ScToggle,
    ScLabel,
    ScInput,
    ScPopoverTriggerFor,
    SiImagePlusIcon,
  ],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="openDialog()"
      type="button"
      scTooltip="Add image"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="sr-only">Add image</span>
    </button>

    <button
      [scPopoverTriggerFor]="popover"
      [attr.aria-label]="ariaLabel"
      [scTooltip]="ariaLabel"
      type="button"
      sc-toggle
      variant="outline"
    >
      <svg si-image-plus-icon></svg>
      <span class="sr-only">{{ ariaLabel }}</span>
    </button>

    <ng-template #popover>
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="width">Url</label>
            <input class="col-span-2 h-8" id="width" sc-input defaultValue="100%" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="maxWidth">Alt</label>
            <input class="col-span-2 h-8" id="maxWidth" sc-input defaultValue="300px" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="height">Title</label>
            <input class="col-span-2 h-8" id="height" sc-input defaultValue="25px" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <button sc-button variant="outline" type="button">Cancel</button>
            <button sc-button type="button">Done</button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionImage {
  ariaLabel = 'Add image';

  private readonly parent = inject(ScEditor);
  dialog = inject(Dialog);

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.image.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setImage(image: ImageData | undefined) {
    if (image?.url) {
      this.editor
        .chain()
        .focus()
        .setImage({
          src: image.url,
          alt: image.alt ? image.alt : '',
          title: image.title ? image.title : '',
        })
        .run();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open<ImageData>(ScAddImageDialog, {
      minWidth: '600px',
    });

    dialogRef.closed.subscribe((result) => {
      this.setImage(result);
    });
  }
}
