import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject, linkedSignal, signal } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { ScAlertDialog } from './alert-dialog';

@Injectable({
  providedIn: 'root',
})
export class ScAlertDialogManager {
  private readonly dialog = inject(Dialog);

  readonly isOpen = signal(false);

  readonly state = linkedSignal(() => (this.isOpen() ? 'open' : 'closed'));

  async open(title: string, description: string, action: string): Promise<boolean> {
    this.isOpen.set(true);

    const dialogRef = this.dialog.open<boolean>(ScAlertDialog, {
      minWidth: '300px',
      data: { title: title, description: description, action: action },
    });

    return firstValueFrom(dialogRef.closed).then((result) => {
      this.isOpen.set(false);
      return Promise.resolve(!!result);
    });
  }
}
