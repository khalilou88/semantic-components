import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { ScConfirmationDialogContent } from './confirmation-dialog-content';

@Injectable({
  providedIn: 'root',
})
export class ScConfirmationDialog {
  readonly dialog = inject(Dialog);

  async confirm(
    title: string,
    message: string,
    actionButtonText = 'Continue',
    cancelButtonText = 'Cancel',
  ): Promise<boolean> {
    const dialogRef = this.dialog.open<boolean>(ScConfirmationDialogContent, {
      minWidth: '300px',
      data: {
        title: title,
        message: message,
        actionButtonText: actionButtonText,
        cancelButtonText: cancelButtonText,
      },
    });

    return firstValueFrom(dialogRef.closed).then((result) => {
      console.log('The confirmation dialog was closed', result);
      return Promise.resolve(!!result);
    });
  }
}
