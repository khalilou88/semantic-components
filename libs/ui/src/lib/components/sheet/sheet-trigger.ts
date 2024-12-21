import {
  ConnectedPosition,
  Overlay,
  OverlayContainer,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, TemplateRef, inject, signal } from '@angular/core';

import { ScSheet, SheetVariants } from './sheet';

@Injectable({
  providedIn: 'root',
})
export class ScSheetTrigger {
  private _overlayContainer = inject(OverlayContainer);

  private readonly overlay = inject(Overlay);
  private overlayRef!: OverlayRef;

  open = signal<boolean>(false);

  openSheet(templateRef: TemplateRef<unknown>, customValue?: number | string) {
    const side: SheetVariants['side'] = 'left';

    this._overlayContainer.getContainerElement().classList.add('sc-overlay-container');

    const positionStrategy = this.getPositionStrategy(side);
    this.overlayRef = this.overlay.create({ positionStrategy });

    this.updateSize(side, customValue);

    const tooltipPortal = new ComponentPortal(ScSheet);

    const tooltipRef: ComponentRef<ScSheet> = this.overlayRef.attach(tooltipPortal);

    tooltipRef.instance.templateRef.set(templateRef);

    tooltipRef.instance.side.set(side);

    this.open.set(true);
  }

  closeSheet() {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
      this.open.set(false);
      this._overlayContainer.getContainerElement().classList.remove('sc-overlay-container');
    }
  }

  private getPositionStrategy(side: SheetVariants['side']): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this._overlayContainer.getContainerElement())
      .withPositions(this.getPositions(side));
  }

  getPositions(side: SheetVariants['side']): ConnectedPosition[] {
    switch (side) {
      case 'top': {
        return [
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
        ];
      }
      case 'bottom': {
        return [
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ];
      }
      case 'left': {
        return [
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
        ];
      }
      case 'right': {
        return [
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'top',
          },
        ];
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }

  updateSize(side: SheetVariants['side'], customValue?: number | string): void {
    switch (side) {
      case 'top': {
        const v = customValue ? customValue : 300;
        this.overlayRef.updateSize({ height: v, width: '100%' });
        return;
      }
      case 'bottom': {
        const v = customValue ? customValue : 300;
        this.overlayRef.updateSize({ height: v, width: '100%' });
        return;
      }
      case 'left': {
        const v = customValue ? customValue : 620;
        this.overlayRef.updateSize({ height: '100%', width: v });
        return;
      }
      case 'right': {
        const v = customValue ? customValue : 620;
        this.overlayRef.updateSize({ height: '100%', width: v });
        return;
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }
}
