import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  inject,
  input,
} from '@angular/core';

import { ScHoverCard } from './hover-card';

@Directive({
  selector: '[scHoverCardTriggerFor]',
})
export class ScHoverCardTriggerFor implements OnDestroy {
  private element = inject<ElementRef<HTMLElement>>(ElementRef);
  private overlay = inject(Overlay);
  private viewContainer = inject(ViewContainerRef);

  readonly scHoverCardTriggerFor = input.required<TemplateRef<unknown>>();

  private overlayRef: OverlayRef | null = null;

  @HostListener('mouseover')
  @HostListener('focus')
  showTooltip(): void {
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.attachTooltip();
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hideTooltip(): void {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
    }
  }

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }

  private attachTooltip(): void {
    if (this.overlayRef === null) {
      const positionStrategy = this.getPositionStrategy();
      this.overlayRef = this.overlay.create({ positionStrategy });
    }

    // const injector = Injector.create({
    //   providers: [
    //     {
    //       provide: TOOLTIP_DATA,
    //       useValue: this.appTooltip,
    //     },
    //   ],
    // });
    const componentPortal = new ComponentPortal(ScHoverCard, this.viewContainer);

    // Attach tooltip portal to overlay
    const componentRef: ComponentRef<ScHoverCard> = this.overlayRef.attach(componentPortal);

    componentRef.instance.templateRef.set(this.scHoverCardTriggerFor());
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.element)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          panelClass: 'top',
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          panelClass: 'bottom',
        },
      ]);
  }
}
