import { Overlay, OverlayContainer, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
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
  private readonly _overlayContainer = inject(OverlayContainer);
  private readonly _overlay = inject(Overlay);
  private _overlayRef!: OverlayRef;

  state = signal<'open' | 'closed'>('closed');
  side = signal<'top' | 'bottom' | 'left' | 'right'>('right');

  open(templateRef: TemplateRef<unknown>, config: ScSheetConfig) {
    this.state.set('open');
    this.side.set(config.side);
    this._overlayContainer.getContainerElement().classList.add(...scOverlayClasses());
    this._overlayContainer.getContainerElement().setAttribute('data-state', 'open');

    const positionStrategy = this.getPositionStrategy(config.side);
    this._overlayRef = this._overlay.create({ positionStrategy });

    this._overlayRef.updateSize({ height: config.height, width: config.width });

    const scSheetPortal = new ComponentPortal(ScSheetContainer);

    const scSheetRef: ComponentRef<ScSheetContainer> = this._overlayRef.attach(scSheetPortal);

    scSheetRef.instance.templateRef.set(templateRef);
  }

  close() {
    if (this._overlayRef?.hasAttached()) {
      this._overlayRef?.detach();
      this.state.set('closed');
      this._overlayContainer.getContainerElement().classList.remove(...scOverlayClasses());
      this._overlayContainer.getContainerElement().setAttribute('data-state', 'closed');
    }
  }

  private getPositionStrategy(side: SheetVariants['side']): PositionStrategy {
    switch (side) {
      case 'top': {
        return this._overlay.position().global().top();
      }
      case 'bottom': {
        return this._overlay.position().global().bottom();
      }
      case 'left': {
        return this._overlay.position().global().left();
      }
      case 'right': {
        return this._overlay.position().global().right();
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }
}
