import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, NgZone } from '@angular/core';

import { take } from 'rxjs/operators';

import { Subject } from 'rxjs';

import { Toast2 } from './toast2';
import { TOAST_DATA, ToastData } from './toast.model';

@Injectable({
  providedIn: 'root',
})
export class Toast2Service {
  private readonly toastQueue: Array<{ data: ToastData; zIndex: number }> = [];
  private readonly activeToasts: Map<OverlayRef, Toast2> = new Map();

  //TODO
  // private readonly defaultDuration = 3000;
  private readonly defaultDuration = 30000;
  private maxZIndex = 1000;

  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector,
    private readonly ngZone: NgZone,
  ) {}

  show(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    duration = this.defaultDuration,
  ): void {
    const toastData: ToastData = { message, type, duration };
    this.toastQueue.push({ data: toastData, zIndex: ++this.maxZIndex });
    this.showNextToast();
  }

  private showNextToast(): void {
    if (this.toastQueue.length === 0) {
      return;
    }

    const { data, zIndex } = this.toastQueue.shift()!;
    const overlayRef = this.createOverlay(zIndex);
    const toastPortal = new ComponentPortal(Toast2, null, this.createInjector(data));
    const componentRef = overlayRef.attach(toastPortal);
    const toastInstance = componentRef.instance;

    this.activeToasts.set(overlayRef, toastInstance);

    // Setup close method
    const closeSub = new Subject<void>();
    toastInstance.close = () => {
      closeSub.next();
    };

    // Auto close after duration
    if (data.duration && data.duration > 0) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngZone.run(() => {
            if (!closeSub.closed) {
              closeSub.next();
            }
          });
        }, data.duration);
      });
    }

    // Handle close
    closeSub.pipe(take(1)).subscribe(async () => {
      // Start exit animation and wait for it to complete
      await toastInstance.startExitAnimation();

      // Clean up
      this.activeToasts.delete(overlayRef);
      overlayRef.dispose();
      closeSub.complete();
    });
  }

  private createOverlay(zIndex: number): OverlayRef {
    const positionStrategy = this.overlay.position().global().bottom('20px').right('20px');

    const overlayConfig = new OverlayConfig({
      positionStrategy,
      hasBackdrop: false,
      disposeOnNavigation: true,
    });

    const overlayRef = this.overlay.create(overlayConfig);
    overlayRef.overlayElement.style.zIndex = `${zIndex}`;
    return overlayRef;
  }

  private createInjector(data: ToastData): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [{ provide: TOAST_DATA, useValue: data }],
    });
  }

  // Convenience methods
  success(message: string, duration = this.defaultDuration): void {
    this.show(message, 'success', duration);
  }

  error(message: string, duration = this.defaultDuration): void {
    this.show(message, 'error', duration);
  }

  warning(message: string, duration = this.defaultDuration): void {
    this.show(message, 'warning', duration);
  }

  info(message: string, duration = this.defaultDuration): void {
    this.show(message, 'info', duration);
  }
}
