import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SiXIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScDialogClose } from './dialog-close';
import { ScDialogContent } from './dialog-content';
import { ScDialogDescription } from './dialog-description';
import { ScDialogFooter } from './dialog-footer';
import { ScDialogHeader } from './dialog-header';
import { ScDialogTitle } from './dialog-title';

@Component({
  selector: 'sc-dialog',
  imports: [
    ScDialogHeader,
    ScDialogTitle,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogClose,
    SiXIcon,
    ScDialogContent,
    ScButton,
  ],
  template: `
    <div sc-dialog-content>
      <button (click)="dialogRef.close()" sc-dialog-close>
        <svg class="size-4" si-x-icon></svg>
        <span class="sr-only">Close</span>
      </button>

      <div sc-dialog-header>
        <h2 sc-dialog-title>Edit profile</h2>

        <p sc-dialog-description>Make changes to your profile here. Click save when you're done.</p>
      </div>

      <div sc-dialog-footer>
        <button sc-button type="submit">Save changes</button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialog {
  dialogRef = inject(DialogRef);
}
