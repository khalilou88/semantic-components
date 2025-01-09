import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';

import { ScAlertDialog } from './alert-dialog';

@Injectable({
  providedIn: 'root',
})
export class ScAlertDialogTrigger {
  readonly dialog = inject(Dialog);

  open(title: string, description: string, action: string) {
    const dialogRef = this.dialog.open(ScAlertDialog, {
      minWidth: '300px',
    });

    const instance = dialogRef.componentInstance;

    instance?.title.set(title);
    instance?.description.set(description);
    instance?.action.set(action);
  }
}
