import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
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
  standalone: true,
})
export class ScTooltip implements OnInit, OnDestroy {
  private readonly overlayPositionBuilder = inject(OverlayPositionBuilder);
  private readonly elementRef = inject(ElementRef);
  private readonly overlay = inject(Overlay);

  readonly text = input('', { alias: 'scTooltip' });
  private overlayRef!: OverlayRef;

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
    tooltipRef.instance.text = this.text;
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
        },
      ]);
  }
}
