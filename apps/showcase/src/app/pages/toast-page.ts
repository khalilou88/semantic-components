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
      <div class="flex space-x-2">
        <button (click)="showToast()" sc-button type="button">Show Toast 1</button>

        <button (click)="showToast2()" sc-button type="button">Show Toast 2</button>

        <button (click)="showToast3()" sc-button type="button">Show Toast 3</button>

        <button (click)="showToast4()" sc-button type="button">Show Toast 4</button>
      </div>

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

      <ng-template #toastTemplate2>
        <div sc-toast>
          <div sc-toast-content>
            <h2 sc-toast-title>Toast 2</h2>
            <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
          </div>
          <button sc-toast-action type="button">Undo</button>
          <button type="button" sc-toast-close>
            <svg class="size-4" si-x-icon></svg>
            <span class="sr-only">Close 2</span>
          </button>
        </div>
      </ng-template>

      <ng-template #toastTemplate3>
        <div sc-toast>
          <div sc-toast-content>
            <h2 sc-toast-title>Toast 3</h2>
            <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
          </div>
          <button sc-toast-action type="button">Undo</button>
          <button type="button" sc-toast-close>
            <svg class="size-4" si-x-icon></svg>
            <span class="sr-only">Close 3</span>
          </button>
        </div>
      </ng-template>

      <ng-template #toastTemplate4>
        <div sc-toast>
          <div sc-toast-content>
            <h2 sc-toast-title>Toast 4</h2>
            <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
          </div>
          <button sc-toast-action type="button">Undo</button>
          <button type="button" sc-toast-close>
            <svg class="size-4" si-x-icon></svg>
            <span class="sr-only">Close 4</span>
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

  private readonly toastTemplate2 = viewChild.required<TemplateRef<unknown>>('toastTemplate2');
  private readonly toastTemplate3 = viewChild.required<TemplateRef<unknown>>('toastTemplate3');
  private readonly toastTemplate4 = viewChild.required<TemplateRef<unknown>>('toastTemplate4');

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }

  protected showToast2() {
    this.toaster.show(this.toastTemplate2());
  }

  protected showToast3() {
    this.toaster.show(this.toastTemplate3());
  }

  protected showToast4() {
    this.toaster.show(this.toastTemplate4());
  }
}
