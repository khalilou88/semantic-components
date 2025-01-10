import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton, ScConfirmationDialogTrigger } from '@semantic-components/ui';

@Component({
  selector: 'app-confirmation-dialog-page',
  imports: [ScButton],
  template: `
    <button (click)="deleteAccount()" sc-button variant="secondary">Delete My account</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfirmationDialogPage {
  scConfirmationDialogTrigger = inject(ScConfirmationDialogTrigger);

  async deleteAccount() {
    const actionConfirmed = await this.scConfirmationDialogTrigger.open(
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
