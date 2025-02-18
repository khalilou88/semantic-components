import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, ViewContainerRef, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private readonly overlayRef: OverlayRef;
  private readonly overlay = inject(Overlay);
  viewContainerRef!: ViewContainerRef;

  constructor() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: false, // No background overlay
      positionStrategy: this.overlay.position().global().top('20px').centerHorizontally(),
    });
  }

  show(toastTemplate: any): void {
    const portal = new TemplatePortal(toastTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);

    // Auto-close after 3 seconds
    setTimeout(() => this.overlayRef.dispose(), 3000);
  }
}
