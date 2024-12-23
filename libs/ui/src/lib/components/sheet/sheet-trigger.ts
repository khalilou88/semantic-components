import { Overlay, OverlayConfig, OverlayContainer, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, TemplateRef, inject, signal } from '@angular/core';

import { scOverlayClasses } from '../overlay';
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

    const overlayConfig = this.getOverlayConfig(config);
    this._overlayRef = this._overlay.create(overlayConfig);

    const scSheetPortal = new ComponentPortal(ScSheetContainer);
    const scSheetRef: ComponentRef<ScSheetContainer> = this._overlayRef.attach(scSheetPortal);

    scSheetRef.instance.templateRef.set(templateRef);

    this._overlayRef.backdropClick().subscribe(() => this.close());
  }

  close() {
    if (this._overlayRef?.hasAttached()) {
      this._overlayRef?.detach();
      this.state.set('closed');
      this._overlayContainer.getContainerElement().classList.remove(...scOverlayClasses());
      this._overlayContainer.getContainerElement().setAttribute('data-state', 'closed');
    }
  }

  private getOverlayConfig(config: ScSheetConfig): OverlayConfig {
    switch (config.side) {
      case 'top': {
        return new OverlayConfig({
          positionStrategy: this._overlay.position().global().top(),
          width: config.width,
          height: config.height,
          hasBackdrop: true,
        });
      }
      case 'bottom': {
        return new OverlayConfig({
          positionStrategy: this._overlay.position().global().bottom(),
          width: config.width,
          height: config.height,
          hasBackdrop: true,
        });
      }
      case 'left': {
        return new OverlayConfig({
          positionStrategy: this._overlay.position().global().left(),
          width: config.width,
          height: config.height,
          hasBackdrop: true,
        });
      }
      case 'right': {
        return new OverlayConfig({
          positionStrategy: this._overlay.position().global().right(),
          width: config.width,
          height: config.height,
          hasBackdrop: true,
        });
      }

      default: {
        throw new Error('Error in switch case');
      }
    }
  }
}
