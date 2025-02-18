import { _IdGenerator } from '@angular/cdk/a11y';
import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector, TemplateRef, inject } from '@angular/core';

import { ScToastContainer } from './toast-container';
import { SC_TOAST_ID } from './toast-id';

interface ToastRef {
  id: string;
  overlayRef: OverlayRef;
}

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private readonly toastRefs: ToastRef[] = [];
  private readonly maxToasts = 3;

  private readonly overlay = inject(Overlay);

  private readonly idGenerator = inject(_IdGenerator);

  private readonly injector = inject(Injector);

  /**
   * Show a toast notification
   * @returns The ID of the created toast
   */
  show(toastTemplate: TemplateRef<unknown>): string {
    if (this.toastRefs.length >= this.maxToasts) {
      // If we've reached max, remove the oldest toast
      this.closeToast(this.toastRefs[0].id);
    }

    // Generate ID if not provided
    const toastId = this.idGenerator.getId('sc-toast-');

    // Create the toast with this ID
    this.createToast(toastTemplate, toastId);

    return toastId;
  }

  /**
   * Remove a specific toast by ID
   */
  remove(id: string): boolean {
    const index = this.toastRefs.findIndex((ref) => ref.id === id);
    if (index > -1) {
      this.closeToast(id);
      return true;
    }
    return false;
  }

  /**
   * Remove all currently displayed toasts
   */
  clear(): void {
    while (this.toastRefs.length > 0) {
      this.closeToast(this.toastRefs[0].id);
    }
  }

  private createToast(toastTemplate: TemplateRef<unknown>, id: string): void {
    // Recalculate positions for all toasts
    this.updateToastPositions();

    const positionStrategy = this.overlay.position().global().top('20px').right('20px');

    const overlayConfig = new OverlayConfig({
      positionStrategy,
    });

    const overlayRef = this.overlay.create(overlayConfig);
    const toastPortal = new ComponentPortal(ScToastContainer, null, this.createInjector(id));

    const toastRef: ComponentRef<ScToastContainer> = overlayRef.attach(toastPortal);
    toastRef.setInput('templateRef', toastTemplate);

    // Add toast reference with ID to our array
    this.toastRefs.push({
      id: id,
      overlayRef,
    });

    this.updateToastPositions();

    setTimeout(() => {
      this.closeToast(id);
    }, 30000); //TODO just 3000
  }

  private closeToast(id: string): void {
    const index = this.toastRefs.findIndex((ref) => ref.id === id);
    if (index > -1) {
      const { overlayRef } = this.toastRefs[index];
      this.toastRefs.splice(index, 1);
      overlayRef.dispose();

      // Recalculate positions for remaining toasts
      this.updateToastPositions();
    }
  }

  private updateToastPositions(): void {
    // Update positions of all existing toasts
    this.toastRefs.forEach((ref, index) => {
      const position = ref.overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;
      position.top(`${20 + index * 80}px`).right('20px');
      ref.overlayRef.updatePosition();
    });
  }

  private createInjector(id: string): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [{ provide: SC_TOAST_ID, useValue: id }],
    });
  }
}
