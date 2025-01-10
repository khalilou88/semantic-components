import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton, ScConfirmationDialog } from '@semantic-components/ui';

@Component({
  selector: 'app-confirmation-dialog-page',
  imports: [ScButton],
  template: `
    Like window.confirm(), confirmation dialog instructs the browser to display a dialog with a
    message, and to wait until the user either confirms or cancels the dialog.

    <br />
    <br />
    <br />
    <br />
    <h1>Example</h1>

    <button (click)="deleteAccount()" sc-button variant="secondary">Delete My account</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfirmationDialogPage {
  private readonly scConfirmationDialog = inject(ScConfirmationDialog);

  async deleteAccount() {
    const userResponse = await this.scConfirmationDialog.confirm(
      'Are you absolutely sure?',
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    );

    if (userResponse) {
      console.log('Delete the account');
    } else {
      console.log('Action canceled');
    }
  }
}
