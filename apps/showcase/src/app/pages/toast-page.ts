import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';

import {
  ScButton,
  ScToast,
  ScToastAction,
  ScToastClose,
  ScToastContent,
  ScToastDescription,
  ScToastTitle,
  Toast2,
  Toast2Service,
  Toaster,
} from '@semantic-components/ui';
import { SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-toast-page',
  imports: [
    ScToastClose,
    SiXIcon,
    ScToastAction,
    ScToastDescription,
    ScToastTitle,
    ScToast,
    ScToastContent,
    ScButton,
    Toast2,
  ],
  template: `
    <div class="m-10">
      <button (click)="showToast()" sc-button type="button">Show Toast</button>

      <ng-template #toastTemplate>
        <div sc-toast>
          <div sc-toast-content>
            <h2 sc-toast-title>Scheduled: Catch up</h2>
            <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
          </div>
          <button sc-toast-action type="button">Undo</button>
          <button type="button" sc-toast-close>
            <svg class="size-4" si-x-icon></svg>
            <span class="sr-only">Close</span>
          </button>
        </div>
      </ng-template>
    </div>

    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Toast Notification Demo</h1>

      <div class="flex flex-wrap gap-2">
        <button
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          (click)="showSuccessToast()"
        >
          Success Toast
        </button>

        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          (click)="showErrorToast()"
        >
          Error Toast
        </button>

        <button
          class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          (click)="showWarningToast()"
        >
          Warning Toast
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          (click)="showInfoToast()"
        >
          Info Toast
        </button>
      </div>

      <sc-toast2></sc-toast2>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {
  private readonly toaster = inject(Toaster);
  private readonly toastService = inject(Toast2Service);

  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');

  constructor() {
    afterNextRender(() => {
      this.toaster.viewContainerRef = this.viewContainerRef;
    });
  }

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }

  showSuccessToast(): void {
    this.toastService.success('Operation completed successfully!');
  }

  showErrorToast(): void {
    this.toastService.error('An error occurred. Please try again.');
  }

  showWarningToast(): void {
    this.toastService.warning('Warning: This action cannot be undone.');
  }

  showInfoToast(): void {
    this.toastService.info('Did you know? You can customize these toasts.');
  }
}
