import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { ScHoverCard } from './hover-card';

@Directive({
  selector: '[scHoverCardTrigger]',
})
export class ScHoverCardTrigger {
  private element = inject<ElementRef<HTMLElement>>(ElementRef);
  private overlay = inject(Overlay);
  private viewContainer = inject(ViewContainerRef);

  @Input() scHoverCardTrigger!: TemplateRef<unknown>;

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

    componentRef.instance.templateRef = this.scHoverCardTrigger;
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
