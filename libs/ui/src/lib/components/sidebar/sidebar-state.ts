import { Dialog } from '@angular/cdk/dialog';
import {
  ConnectedPosition,
  Overlay,
  OverlayContainer,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, inject, signal } from '@angular/core';

import { ScSidebar, SheetVariants } from './sidebar';

@Injectable({
  providedIn: 'root',
})
export class ScSidebarState {
  private _overlayContainer = inject(OverlayContainer);

  private readonly overlay = inject(Overlay);
  private overlayRef!: OverlayRef;

  open = signal<boolean>(false);

  openSheet() {
    const side: SheetVariants['side'] = 'left';

    const positionStrategy = this.getPositionStrategy(side);
    this.overlayRef = this.overlay.create({ positionStrategy });

    this.overlayRef.updateSize({ width: 620 });

    const tooltipPortal = new ComponentPortal(ScSidebar);

    const tooltipRef: ComponentRef<ScSidebar> = this.overlayRef.attach(tooltipPortal);

    tooltipRef.instance.side.set(side);
  }

  toggle() {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
      this.open.set(false);
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
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
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
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
        ];
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }
}
