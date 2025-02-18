import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, TemplateRef, inject } from '@angular/core';

import { ScToastContainer } from './toast-container';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private readonly toastRefs: OverlayRef[] = [];
  private readonly maxToasts = 3;

  private readonly overlay = inject(Overlay);

  show(toastTemplate: TemplateRef<unknown>): void {
    if (this.toastRefs.length >= this.maxToasts) {
      // If we've reached max, remove the oldest toast
      this.closeToast(this.toastRefs[0]);
    }
    this.createToast(toastTemplate);
  }

  private createToast(toastTemplate: TemplateRef<unknown>): void {
    // Recalculate positions for all toasts
    this.updateToastPositions();

    const positionStrategy = this.overlay.position().global().top('20px').right('20px');

    const overlayConfig = new OverlayConfig({
      positionStrategy,
    });

    const overlayRef = this.overlay.create(overlayConfig);
    const toastPortal = new ComponentPortal(ScToastContainer);

    const toastRef: ComponentRef<ScToastContainer> = overlayRef.attach(toastPortal);
    toastRef.setInput('templateRef', toastTemplate);

    this.toastRefs.push(overlayRef);
    this.updateToastPositions();

    setTimeout(() => {
      this.closeToast(overlayRef);
    }, 30000); //TODO just 3000
  }

  private closeToast(ref: OverlayRef): void {
    const index = this.toastRefs.indexOf(ref);
    if (index > -1) {
      this.toastRefs.splice(index, 1);
      ref.dispose();
      // Recalculate positions for remaining toasts
      this.updateToastPositions();
    }
  }

  private updateToastPositions(): void {
    // Update positions of all existing toasts
    this.toastRefs.forEach((ref, index) => {
      const position = ref.getConfig().positionStrategy as any;
      position.top(`${20 + index * 80}px`).right('20px');
      ref.updatePosition();
    });
  }
}
