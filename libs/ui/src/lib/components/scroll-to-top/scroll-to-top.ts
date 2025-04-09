import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, DestroyRef, Injectable, Injector, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

import { fromEvent } from 'rxjs';

import { ScScrollToTopButton2 } from './scroll-to-top-button2';

@Injectable({
  providedIn: 'root',
})
export class ScScrollToTop {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  private readonly destroyRef = inject(DestroyRef);

  private overlayRef: OverlayRef | null = null;
  private componentRef: ComponentRef<ScScrollToTopButton2> | null = null;
  private readonly scrollThreshold = 300;

  init() {
    // Set up scroll listener
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (window.scrollY > this.scrollThreshold) {
          this.show();
        } else {
          this.hide();
        }
      });
  }

  private show() {
    if (!this.componentRef) {
      // Create the overlay if it doesn't exist
      if (!this.overlayRef) {
        const config = new OverlayConfig({
          hasBackdrop: false,
          positionStrategy: this.overlay.position().global().bottom('20px').right('20px'),
        });

        this.overlayRef = this.overlay.create(config);
      }

      const portal = new ComponentPortal(ScScrollToTopButton2, null, this.injector);
      this.componentRef = this.overlayRef.attach(portal);

      // Subscribe to the scrollToTop event
      this.componentRef.instance.scrollToTop.subscribe(() => {
        this.scrollToTop();
      });

      // Small delay to allow DOM to update before animation
      setTimeout(() => {
        if (this.componentRef) {
          this.componentRef.instance.state.set('visible');
        }
      }, 10);
    } else if (this.componentRef) {
      this.componentRef.instance.state.set('visible');
    }
  }

  private hide() {
    if (this.componentRef) {
      this.componentRef.instance.state.set('hidden');
      this.componentRef.instance.animationDone.subscribe(() => {
        if (
          this.overlayRef &&
          this.componentRef &&
          this.componentRef.instance.state() === 'hidden'
        ) {
          this.overlayRef.detach();
          this.componentRef = null;
        }
      });
    }
  }

  private scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
