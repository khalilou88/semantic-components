import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScAlertDialogManager, ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-alert-dialog-demo',
  imports: [ScButton],
  template: `
    <div class="flex items-center justify-center">
      <button (click)="deleteAccount()" sc-button variant="secondary">Show Dialog</button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogDemo {
  private readonly scAlertDialogManager = inject(ScAlertDialogManager);

  async deleteAccount() {
    const actionConfirmed = await this.scAlertDialogManager.open(
      'Are you absolutely sure?',
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      'Continue',
    );

    if (actionConfirmed) {
      console.log('Delete the account');
    } else {
      console.log('Action canceled');
    }
  }
}
