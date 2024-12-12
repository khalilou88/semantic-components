import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, inject } from '@angular/core';

import { ScToast } from './toast';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  private overlayRef: OverlayRef;
  overlay = inject(Overlay);

  constructor() {
    // Initialize an overlay and define a relative position
    // Change this to control where your toaster should appear
    this.overlayRef = this.overlay.create({
      hasBackdrop: false,
      positionStrategy: this.overlay.position().global().top('20px').right('20px'),
    });
  }

  toast(message: string): void {
    // Create a Portal instance of our `NotificationComponent`
    const notificationPortal = new ComponentPortal(ScToast);
    // Attach our `NotificationComponent` to the Overlay Portal
    //  const notificationRef: ComponentRef<Toaster> = this.overlayRef.attach(notificationPortal);
    // Now we can access the component instance
    // and we can pass input for the `message` prop we created.
    // notificationRef.instance.message = message;

    // Set a timeout to detach our component from the overlay
    // after 3000 milliseconds
    setTimeout(() => {
      this.overlayRef.detach();
    }, 3000);
  }
}
