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
  ScToastContent,
  ScToastDescription,
  ScToastTitle,
  Toaster,
} from '@semantic-components/ui';

@Component({
  selector: 'app-toast-with-title',
  imports: [ScToastDescription, ScToastTitle, ScToast, ScToastContent, ScButton, ScButton],
  template: `
    <button (click)="showToast()" sc-button type="button" variant="outline">Show Toast</button>

    <ng-template #toastTemplate>
      <div sc-toast>
        <div sc-toast-content>
          <h2 sc-toast-title>Uh oh! Something went wrong.</h2>
          <p sc-toast-description>There was a problem with your request.</p>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastWithTitle {
  private readonly toaster = inject(Toaster);

  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }
}
