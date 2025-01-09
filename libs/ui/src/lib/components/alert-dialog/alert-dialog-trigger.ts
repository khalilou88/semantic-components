import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';

import { ScAlertDialog } from './alert-dialog';

@Injectable({
  providedIn: 'root',
})
export class ScAlertDialogTrigger {
  readonly dialog = inject(Dialog);

  open() {
    this.dialog.open(ScAlertDialog, {
      minWidth: '300px',
    });
  }
}
