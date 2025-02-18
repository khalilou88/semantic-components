import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, inject } from '@angular/core';

import { ScToastContainer } from './toast-container';
import { ToastRef } from './toast-ref';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private overlayRef!: OverlayRef;
  private readonly overlay = inject(Overlay);

  private lastToast?: ToastRef;

  // private readonly toastConfig = inject<ToastConfig>(TOAST_CONFIG_TOKEN);

  show2(toastTemplate: any): void {
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

  show(toastTemplate: any) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const portal = new ComponentPortal(ScToastContainer, null);

    const componentRef: ComponentRef<ScToastContainer> = overlayRef.attach(portal);
    componentRef.setInput('templateRef', toastTemplate);

    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay
      .position()
      .global()
      .top(this.getPosition())
      .right(20 + 'px');
  }

  getPosition() {
    const lastToastIsVisible = this.lastToast?.isVisible();
    const position = lastToastIsVisible ? this.lastToast!.getPosition().bottom : 20;

    return position + 'px';
  }

  close() {
    this.overlayRef.dispose();
  }
}
