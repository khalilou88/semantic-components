import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton } from '../button';
import { ScAlertDialogContent } from './alert-dialog-content';
import { scAlertDialogDescription } from './alert-dialog-description';
import { ScAlertDialogFooter } from './alert-dialog-footer';
import { ScAlertDialogHeader } from './alert-dialog-header';
import { ScAlertDialogTitle } from './alert-dialog-title';

@Component({
  selector: 'sc-alert-dialog',
  imports: [
    ScButton,
    ScAlertDialogFooter,
    ScAlertDialogHeader,
    scAlertDialogDescription,
    ScAlertDialogTitle,
    ScAlertDialogContent,
  ],
  template: `
    <div sc-alert-dialog-content>
      <div sc-alert-dialog-header>
        <h2 sc-alert-dialog-title>Are you absolutely sure?</h2>

        <p sc-alert-dialog-description>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </p>
      </div>

      <div sc-alert-dialog-footer>
        <button class="mt-2 sm:mt-0" (click)="dialogRef.close()" variant="outline" sc-button>
          Cancel
        </button>
        <button sc-button>Continue</button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialog {
  dialogRef = inject(DialogRef);

  constructor() {
    this.dialogRef.disableClose = true;
  }
}
