import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector, TemplateRef, inject } from '@angular/core';

import { ScToastContainer } from './toast-container';
import { ToastRef } from './toast-ref';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private readonly overlay = inject(Overlay);

  private readonly injector = inject(Injector);

  private lastToast?: ToastRef;

  show(toastTemplate: TemplateRef<unknown>) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const portal = new ComponentPortal(ScToastContainer, null, this.createInjector(toastRef));

    const componentRef: ComponentRef<ScToastContainer> = overlayRef.attach(portal);
    componentRef.setInput('templateRef', toastTemplate);

    // Auto-close after 3 seconds
    // setTimeout(() => this.overlayRef.dispose(), 3000);
    setTimeout(() => overlayRef.dispose(), 30000);
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

  private createInjector(toastRef: ToastRef): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [{ provide: ToastRef, useValue: toastRef }],
    });
  }
}
