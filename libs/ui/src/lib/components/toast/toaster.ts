import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, inject } from '@angular/core';

import { ScToastContainer } from './toast-container';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private overlayRef!: OverlayRef;
  private readonly overlay = inject(Overlay);

  show(toastTemplate: any): void {
    this.overlayRef = this.overlay.create({
      hasBackdrop: false, // No background overlay
      positionStrategy: this.overlay.position().global().top('20px').right('20px'),
    });

    const portal = new ComponentPortal(ScToastContainer, null);
    const componentRef: ComponentRef<ScToastContainer> = this.overlayRef.attach(portal);
    componentRef.setInput('templateRef', toastTemplate);

    // Auto-close after 3 seconds
    // setTimeout(() => this.overlayRef.dispose(), 3000);
    setTimeout(() => this.overlayRef.dispose(), 30000);
  }

  close() {
    this.overlayRef.dispose();
  }
}
