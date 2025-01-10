import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton, ScConfirmationDialog } from '@semantic-components/ui';

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
  private readonly scConfirmationDialog = inject(ScConfirmationDialog);

  async deleteAccount() {
    const response = await this.scConfirmationDialog.confirm(
      'Are you absolutely sure?',
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      'Continue',
    );

    if (response) {
      console.log('Delete the account');
    } else {
      console.log('Action canceled');
    }
  }
}
