import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScAlertDialogTrigger, ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [ScButton],
  template: `
    <button (click)="deleteAccount()" sc-button variant="secondary">Delete My account</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {
  scAlertDialogTrigger = inject(ScAlertDialogTrigger);

  async deleteAccount() {
    const actionConfirmed = await this.scAlertDialogTrigger.open(
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
