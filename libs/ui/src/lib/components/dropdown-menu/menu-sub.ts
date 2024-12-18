import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScMenuContainer } from './menu-container';

@Component({
  selector: 'sc-menu-sub',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(click)': 'open()',
    '(mouseover)': 'open()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuSub {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  private overlayRef: OverlayRef | null = null;

  @ViewChild(TemplateRef) menuSubRef: TemplateRef<unknown> | undefined;

  open() {
    console.log('open sub menu');

    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.attachTooltip();
  }

  private element = inject<ElementRef<HTMLElement>>(ElementRef);
  private overlay = inject(Overlay);
  private viewContainer = inject(ViewContainerRef);

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
    const componentPortal = new ComponentPortal(ScMenuContainer, this.viewContainer);

    // Attach tooltip portal to overlay
    const componentRef: ComponentRef<ScMenuContainer> = this.overlayRef.attach(componentPortal);

    console.log('this.menuSubRef');
    console.log(this.menuSubRef);

    if (this.menuSubRef !== undefined) {
      componentRef.instance.templateRef.set(this.menuSubRef);
    }
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
