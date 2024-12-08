import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { _getEventTarget } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterRenderRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';

import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-select',
  imports: [SvgChevronDownIcon, OverlayModule],
  template: `
    <button
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      #scSelectTrigger
      (click)="open()"
      type="button"
      role="combobox"
    >
      {{ label() }}
      <svg-chevron-down-icon class="h-4 w-4 opacity-50" />
    </button>

    <ng-template #panelTemplate>
      <div
        class="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScSelectState],
})
export class ScSelect {
  state = inject(ScSelectState);

  _overlay = inject(Overlay);
  _dir = inject(Directionality, { optional: true });
  _viewContainerRef = inject(ViewContainerRef);
  _injector = inject(Injector);

  private _portal: TemplatePortal<unknown> | null = null;

  scSelectTrigger = viewChild.required<ElementRef<HTMLButtonElement>>('scSelectTrigger');

  protected _panelTemplate = viewChild.required<TemplateRef<unknown>>('panelTemplate');

  private _onOpenRender: AfterRenderRef | null = null;

  placeholder = input<string>('');

  label = computed(() => {
    if (this.state.selectedLabel()) {
      return this.state.selectedLabel();
    }

    return this.placeholder();
  });

  private _overlayRef: OverlayRef | null = null;

  private _getOverlayRef(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this.scSelectTrigger())
      .withFlexibleDimensions(false)
      .withPush(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        },
      ]);

    this._overlayRef = this._overlay.create({
      positionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._dir || 'ltr',
      hasBackdrop: false,
    });

    // this._overlayRef.keydownEvents().subscribe((event) => {
    //   this._handleKeydown(event);
    // });

    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const target = _getEventTarget(event) as HTMLElement;
      const origin = this.scSelectTrigger().nativeElement;

      if (target && target !== origin && !origin.contains(target)) {
        this.close();
      }
    });

    return this._overlayRef;
  }

  open(): void {
    if (this.state.isOpen()) {
      return;
    }

    this.state.isOpen.set(true);

    const overlayRef = this._getOverlayRef();
    overlayRef.updateSize({ width: this.scSelectTrigger().nativeElement.offsetWidth });
    this._portal ??= new TemplatePortal(this._panelTemplate(), this._viewContainerRef);
    overlayRef.attach(this._portal);
    this._onOpenRender?.destroy();
    this._onOpenRender = afterNextRender(
      () => {
        // const options = this._options();
        // this._syncSelectedState(this._input.value(), options, options[0]);
        this._onOpenRender = null;
      },
      { injector: this._injector },
    );

    //this.opened.emit();
  }

  /** Closes the timepicker. */
  close(): void {
    if (this.state.isOpen()) {
      this.state.isOpen.set(false);
      this._overlayRef?.detach();
      //this.closed.emit();
    }
  }
}
