import { DIALOG_DATA, Dialog, DialogModule } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import {
  ScDialogClose,
  ScDialogContent,
  ScDialogDescription,
  ScDialogFooter,
  ScDialogHeader,
  ScDialogTitle,
} from '@semantic-components/ui';
import { SvgXIcon } from '@semantic-icons/lucide-icons';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-page',
  imports: [DialogModule],
  template: `
    <p>dialog-page works!</p>

    <button (click)="openDialog()">Open dialog</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogPage {
  dialog = inject(Dialog);

  openDialog() {
    this.dialog.open(CdkDialogDataExampleDialog, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'cdk-dialog-data-example-dialog',
  imports: [
    ScDialogHeader,
    ScDialogTitle,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogClose,
    SvgXIcon,
    ScDialogContent,
  ],
  template: `
    <div sc-dialog-content>
      <button sc-dialog-close>
        <svg-x-icon />
        <span class="sr-only">Close</span>
      </button>

      <div sc-dialog-header>
        <h2 sc-dialog-title>Edit profile</h2>

        <p sc-dialog-description>Make changes to your profile here. Click save when you're done.</p>
      </div>

      <div sc-dialog-footer>
        <button type="submit">Save changes</button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkDialogDataExampleDialog {
  data = inject(DIALOG_DATA);
}
