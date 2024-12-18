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

import { ScPopover } from './popover';

@Directive({
  selector: '[scPopoverTriggerFor]',
  host: {
    '(click)': 'open()',
  },
})
export class ScPopoverTriggerFor implements OnDestroy {
  private element = inject<ElementRef<HTMLElement>>(ElementRef);
  private overlay = inject(Overlay);
  private viewContainer = inject(ViewContainerRef);

  readonly scPopoverTriggerFor = input.required<TemplateRef<unknown>>();

  private overlayRef: OverlayRef | null = null;

  open(): void {
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.attachTooltip();
  }

  close(): void {
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

    //TODO make this a input
    this.overlayRef.updateSize({ width: 320 });

    // const injector = Injector.create({
    //   providers: [
    //     {
    //       provide: TOOLTIP_DATA,
    //       useValue: this.appTooltip,
    //     },
    //   ],
    // });
    const componentPortal = new ComponentPortal(ScPopover, this.viewContainer);

    // Attach tooltip portal to overlay
    const componentRef: ComponentRef<ScPopover> = this.overlayRef.attach(componentPortal);

    componentRef.instance.templateRef.set(this.scPopoverTriggerFor());
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
