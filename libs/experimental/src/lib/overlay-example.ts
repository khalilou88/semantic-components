import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, NgZone, ViewEncapsulation } from '@angular/core';

import { AnimatedContent } from './animated';

@Component({
  selector: 'lib-overlay-example',
  imports: [],
  template: `
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
      (click)="openOverlay()"
    >
      Open Overlay
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayExample {
  private overlayRef: OverlayRef | null = null;

  constructor(
    private readonly overlay: Overlay,
    private readonly ngZone: NgZone,
  ) {}

  openOverlay() {
    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'bg-black bg-opacity-50 transition-opacity duration-300',
      panelClass: 'flex items-center justify-center p-4',
    });

    this.overlayRef = this.overlay.create(config);
    const componentPortal = new ComponentPortal(AnimatedContent);
    const componentRef = this.overlayRef.attach(componentPortal);

    componentRef.instance.close.subscribe(() => {
      const backdropElement = this.overlayRef?.backdropElement;

      if (backdropElement) {
        // Fade out backdrop
        backdropElement.classList.remove('bg-opacity-50');
        backdropElement.classList.add('bg-opacity-0');
      }

      // Start component exit animation
      componentRef.instance.startExitAnimation(() => {
        this.ngZone.run(() => {
          if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
          }
        });
      });
    });
  }
}
