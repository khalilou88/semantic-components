import { ConnectedPosition, Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';

import { ScTooltipContainer } from './tooltip-container';

@Directive({
  selector: '[scTooltip]',
})
export class ScTooltip implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef);
  private readonly overlay = inject(Overlay);
  private overlayRef!: OverlayRef;

  message = input('', { alias: 'scTooltip' });
  position = input<'left' | 'right' | 'above' | 'below'>('below');

  ngOnInit() {
    const positionStrategy = this.getPositionStrategy();
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }

  @HostListener('mouseover')
  @HostListener('focus')
  showTooltip() {
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.attachTooltip();
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hideTooltip() {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
    }
  }

  private attachTooltip(): void {
    // Create tooltip portal
    const tooltipPortal = new ComponentPortal(ScTooltipContainer);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<ScTooltipContainer> = this.overlayRef.attach(tooltipPortal);

    // Pass content to tooltip component instance
    tooltipRef.instance.message = this.message;
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.getPositions());
  }

  getPositions(): ConnectedPosition[] {
    switch (this.position()) {
      case 'above': {
        return [
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: -4,
          },
        ];
      }
      case 'below': {
        return [
          {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetY: 4,
          },
        ];
      }
      case 'left': {
        return [
          {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
            offsetX: -4,
          },
        ];
      }
      case 'right': {
        return [
          {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
            offsetX: 4,
          },
        ];
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }
}
