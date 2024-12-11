import {
  ConnectedPosition,
  Overlay,
  OverlayContainer,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, inject, signal } from '@angular/core';

import { ScSheet, SheetVariants } from './sheet';

@Injectable({
  providedIn: 'root',
})
export class ScSheetTrigger {
  private _overlayContainer = inject(OverlayContainer);

  private readonly overlay = inject(Overlay);
  private overlayRef!: OverlayRef;

  open = signal<boolean>(false);

  openSheet() {
    const side: SheetVariants['side'] = 'left';

    this._overlayContainer.getContainerElement().classList.add('sc-overlay-container');

    const positionStrategy = this.getPositionStrategy(side);
    this.overlayRef = this.overlay.create({ positionStrategy });

    this.updateSize(side);

    const tooltipPortal = new ComponentPortal(ScSheet);

    const tooltipRef: ComponentRef<ScSheet> = this.overlayRef.attach(tooltipPortal);

    tooltipRef.instance.side.set(side);
  }

  toggle() {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
      this.open.set(false);
      this._overlayContainer.getContainerElement().classList.remove('sc-overlay-container');
    } else {
      this.openSheet();
      this.open.set(true);
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

  updateSize(side: SheetVariants['side']): void {
    switch (side) {
      case 'top': {
        this.overlayRef.updateSize({ height: 300, width: '100%' });
        return;
      }
      case 'bottom': {
        this.overlayRef.updateSize({ height: 300, width: '100%' });
        return;
      }
      case 'left': {
        this.overlayRef.updateSize({ width: 620 });
        return;
      }
      case 'right': {
        this.overlayRef.updateSize({ width: 620 });
        return;
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }
}
