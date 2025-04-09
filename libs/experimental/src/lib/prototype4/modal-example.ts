import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'lib-modal-example',
  imports: [OverlayModule],
  template: `
    <button
      class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
      (click)="openModal()"
    >
      Open Modal
    </button>

    <ng-template #modalTemplate>
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <!-- Backdrop -->
        <div
          [class]="
            isExiting
              ? 'absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-0'
              : 'absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-60'
          "
          (click)="closeModal()"
          (keydown)="onKeydown($event)"
          tabindex="0"
        ></div>

        <!-- Modal content -->
        <div
          [class]="
            isExiting
              ? 'relative bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto transition-all duration-300 ease-in-out transform opacity-0 scale-95'
              : 'relative bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto transition-all duration-300 ease-in-out transform opacity-100 scale-100'
          "
        >
          <h2 class="text-xl font-bold mb-4">Modal Title</h2>
          <p class="mb-6">This modal will animate when opening and closing.</p>
          <div class="flex justify-end">
            <button
              class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
              (click)="closeModal()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalExample {
  private readonly overlay = inject(Overlay);

  readonly modalTemplate = viewChild.required<TemplateRef<any>>('modalTemplate');
  overlayRef: OverlayRef | null = null;
  isExiting = false;

  private readonly viewContainerRef = inject(ViewContainerRef);

  openModal() {
    this.isExiting = false;

    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false, // We're handling our own backdrop in the template
    });

    const portal = new TemplatePortal(this.modalTemplate(), this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  closeModal() {
    if (this.overlayRef) {
      this.isExiting = true;

      // Wait for the animation to complete
      setTimeout(() => {
        if (this.overlayRef) {
          this.overlayRef.dispose();
          this.overlayRef = null;
        }
      }, 300); // Match duration with Tailwind's duration-300
    }
  }

  onKeydown(event: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.target.click();
    }
  }
}
