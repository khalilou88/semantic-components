import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  inject,
  input,
} from '@angular/core';

import { ScHoverCard } from './hover-card';

@Directive({
  selector: '[scHoverCardTriggerFor]',
  host: {
    '(mouseover)': 'showCard()',
    '(focus)': 'showCard()',
    '(mouseleave)': 'hideCard()',
    '(blur)': 'hideCard()',
  },
})
export class ScHoverCardTriggerFor implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly viewContainer = inject(ViewContainerRef);

  readonly scHoverCardTriggerFor = input.required<TemplateRef<unknown>>();

  private overlayRef: OverlayRef | null = null;

  showCard(): void {
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.attachTooltip();
  }

  hideCard(): void {
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

    const componentPortal = new ComponentPortal(ScHoverCard, this.viewContainer);

    const componentRef: ComponentRef<ScHoverCard> = this.overlayRef.attach(componentPortal);

    componentRef.setInput('templateRef', this.scHoverCardTriggerFor());
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
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
      ]);
  }
}
