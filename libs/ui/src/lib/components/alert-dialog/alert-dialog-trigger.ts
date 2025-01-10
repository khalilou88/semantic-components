import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { ScAlertDialog } from './alert-dialog';

@Injectable({
  providedIn: 'root',
})
export class ScAlertDialogTrigger {
  readonly dialog = inject(Dialog);

  async open(title: string, description: string, action: string): Promise<boolean> {
    const dialogRef = this.dialog.open<boolean>(ScAlertDialog, {
      minWidth: '300px',
      data: { title: title, description: description, action: action },
    });

    return firstValueFrom(dialogRef.closed).then((result) => {
      console.log('The dialog was closed', result);
      return Promise.resolve(!!result);
    });
  }
}
