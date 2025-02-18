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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {
  private readonly toaster = inject(Toaster);

  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }
}
