import {
  ConnectedPosition,
  Overlay,
  OverlayContainer,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, TemplateRef, inject, signal } from '@angular/core';

import { scOverlayClasses } from '../overlay';
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
  side = signal<'top' | 'bottom' | 'left' | 'right'>('right');

  toogle(templateRef: TemplateRef<unknown>, config: ScSheetConfig) {
    if (this.state() === 'open') {
      this.close();
    }

    if (this.state() === 'closed') {
      this.open(templateRef, config);
    }
  }

  open(templateRef: TemplateRef<unknown>, config: ScSheetConfig) {
    this.state.set('open');
    this.side.set(config.side);
    this._overlayContainer.getContainerElement().classList.add(...scOverlayClasses());
    this._overlayContainer.getContainerElement().setAttribute('data-state', 'open');

    const positionStrategy = this.getPositionStrategy(config.side);
    this.overlayRef = this.overlay.create({ positionStrategy });

    this.overlayRef.updateSize({ height: config.height, width: config.width });

    const scSheetPortal = new ComponentPortal(ScSheetContainer);

    const scSheetRef: ComponentRef<ScSheetContainer> = this.overlayRef.attach(scSheetPortal);

    scSheetRef.instance.templateRef.set(templateRef);
  }

  close() {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
      this.state.set('closed');
      this._overlayContainer.getContainerElement().classList.remove(...scOverlayClasses());
      this._overlayContainer.getContainerElement().setAttribute('data-state', 'closed');
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
