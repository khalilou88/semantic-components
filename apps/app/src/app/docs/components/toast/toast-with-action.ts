import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
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
  Toaster,
} from '@semantic-components/ui';
import { SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-toast-with-action',
  imports: [
    ScToastClose,
    SiXIcon,
    ScToastAction,
    ScToastDescription,
    ScToastTitle,
    ScToast,
    ScToastContent,
    ScButton,
    ScButton,
  ],
  template: `
    <button (click)="showToast()" sc-button type="button" variant="outline">Show Toast</button>

    <ng-template #toastTemplate>
      <div sc-toast>
        <div sc-toast-content>
          <h2 sc-toast-title>Uh oh! Something went wrong.</h2>
          <p sc-toast-description>There was a problem with your request.</p>
        </div>
        <button sc-toast-action type="button">Try again</button>
        <button type="button" sc-toast-close>
          <svg class="size-4" si-x-icon></svg>
          <span class="sr-only">Close 4</span>
        </button>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastWithAction {
  private readonly toaster = inject(Toaster);

  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }
}
