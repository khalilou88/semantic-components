import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, inject } from '@angular/core';

import { AnimatedContent } from './animated';

@Injectable({
  providedIn: 'root',
})
export class AnimatedOverlayService {
  private readonly overlay = inject(Overlay);

  private overlayRef: OverlayRef | null = null;

  componentRef!: ComponentRef<AnimatedContent>;

  async open(config: { title: string; content: string }): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const overlayConfig = new OverlayConfig({
        hasBackdrop: true,
        backdropClass: ['bg-black', 'bg-opacity-0', 'transition-all', 'duration-300'],
        panelClass: ['flex', 'items-center', 'justify-center', 'p-4'],
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      });

      this.overlayRef = this.overlay.create(overlayConfig);

      // Animate backdrop in
      if (this.overlayRef.backdropElement) {
        setTimeout(() => {
          this.overlayRef?.backdropElement?.classList.remove('bg-opacity-0');
          this.overlayRef?.backdropElement?.classList.add('bg-opacity-50');
        }, 50);
      }

      const componentPortal = new ComponentPortal(AnimatedContent);
      this.componentRef = this.overlayRef.attach(componentPortal);

      this.componentRef.instance.title = config.title;
      this.componentRef.instance.content = config.content;

      // Add backdrop click to close
      this.overlayRef.backdropClick().subscribe(async () => {
        await this.close();
        resolve(false);
      });

      this.componentRef.instance.confirm.subscribe(async () => {
        await this.close();
        resolve(true);
      });

      this.componentRef.instance.cancel.subscribe(async () => {
        await this.close();
        resolve(false);
      });
    });
  }

  private async close(): Promise<void> {
    if (!this.overlayRef) return;

    // Animate backdrop out
    if (this.overlayRef.backdropElement) {
      this.overlayRef.backdropElement.classList.remove('bg-opacity-50');
      this.overlayRef.backdropElement.classList.add('bg-opacity-0');
    }

    // Get component ref and start exit animation
    const componentInstance = this.componentRef.instance;

    if (componentInstance) {
      await componentInstance.startExitAnimation();
    } else {
      // Add a short delay for backdrop animation
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    this.overlayRef.dispose();
    this.overlayRef = null;
  }
}
