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
  Toaster,
} from '@semantic-components/ui';

@Component({
  selector: 'app-toast-simple',
  imports: [ScToastDescription, ScToast, ScToastContent, ScButton, ScButton],
  template: `
    <button (click)="showToast()" sc-button type="button" variant="outline">
      Show Simple Toast
    </button>

    <ng-template #toastTemplate>
      <div sc-toast>
        <div sc-toast-content>
          <p sc-toast-description>Your message has been sent.</p>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastSimple {
  private readonly toaster = inject(Toaster);

  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }
}
