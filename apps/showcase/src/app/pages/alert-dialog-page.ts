import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScAlertDialog, ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [ScButton],
  template: `
    <button (click)="openDialog()" sc-button variant="secondary">Open alert dialog</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {
  dialog = inject(Dialog);

  openDialog() {
    this.dialog.open(ScAlertDialog, {
      minWidth: '300px',
    });
  }
}
