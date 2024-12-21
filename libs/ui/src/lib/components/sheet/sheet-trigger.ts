import {
  ConnectedPosition,
  Overlay,
  OverlayContainer,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, TemplateRef, inject, signal } from '@angular/core';

import { SheetVariants } from './sheet';
import { ScSheetConfig } from './sheet-config';
import { ScSheetContainer } from './sheet-container';

@Injectable({
  providedIn: 'root',
})
export class ScSheetTrigger {
  private _overlayContainer = inject(OverlayContainer);

  private readonly overlay = inject(Overlay);
  private overlayRef!: OverlayRef;

  state = signal<'open' | 'closed'>('closed');

  open(templateRef: TemplateRef<unknown>, config: ScSheetConfig) {
    this._overlayContainer.getContainerElement().classList.add('sc-overlay-container');

    const positionStrategy = this.getPositionStrategy(config.side);
    this.overlayRef = this.overlay.create({ positionStrategy });

    this.overlayRef.updateSize({ height: config.height, width: config.width });

    const scSheetPortal = new ComponentPortal(ScSheetContainer);

    const scSheetRef: ComponentRef<ScSheetContainer> = this.overlayRef.attach(scSheetPortal);

    scSheetRef.instance.templateRef.set(templateRef);

    this.state.set('open');
  }

  close() {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
      this._overlayContainer.getContainerElement().classList.remove('sc-overlay-container');
      this.state.set('closed');
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
}
