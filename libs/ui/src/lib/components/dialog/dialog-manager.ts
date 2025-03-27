import { Dialog } from '@angular/cdk/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable, TemplateRef, effect, inject, linkedSignal, signal } from '@angular/core';

import { ScDialogContainer } from './dialog-container';

@Injectable({
  providedIn: 'root',
})
export class ScDialogManager {
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

  open(templateRef: TemplateRef<unknown>) {
    const dialogRef = this.dialog.open(ScDialogContainer, {
      minWidth: '300px',
      // Pass the template as data to the dialog
      data: { templateRef },
    });

    this.isOpen.set(true);

    dialogRef.closed.subscribe((result) => {
      this.isOpen.set(false);
    });
  }
}
