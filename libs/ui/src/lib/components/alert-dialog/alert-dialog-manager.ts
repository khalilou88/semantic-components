import { Dialog } from '@angular/cdk/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable, effect, inject, linkedSignal, signal } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { ScAlertDialog } from './alert-dialog';

@Injectable({
  providedIn: 'root',
})
export class ScAlertDialogManager {
  private readonly overlayContainer = inject(OverlayContainer);
  private readonly dialog = inject(Dialog);

  readonly isOpen = signal(false);

  readonly state = linkedSignal(() => (this.isOpen() ? 'open' : 'closed'));

  constructor() {
    effect(() => {
      const overlayDarkBackdrop = this.overlayContainer
        .getContainerElement()
        .querySelector('.cdk-overlay-dark-backdrop');
      if (overlayDarkBackdrop) {
        overlayDarkBackdrop.setAttribute('data-state', this.state());
      }
    });
  }

  async open(title: string, description: string, action: string): Promise<boolean> {
    const dialogRef = this.dialog.open<boolean>(ScAlertDialog, {
      minWidth: '300px',
      data: { title: title, description: description, action: action },
    });

    this.isOpen.set(true);

    return firstValueFrom(dialogRef.closed).then((result) => {
      this.isOpen.set(false);
      return Promise.resolve(!!result);
    });
  }
}
