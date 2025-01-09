import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  effect,
  inject,
} from '@angular/core';

import { ScAlertDialogTrigger, ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [ScButton],
  template: `
    <button (click)="openAlertDialog()" sc-button variant="secondary">Open alert dialog</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {
  scAlertDialogTrigger = inject(ScAlertDialogTrigger);

  actionConfirmed = this.scAlertDialogTrigger.actionConfirmed;

  constructor() {
    effect(() => {
      if (this.actionConfirmed()) {
        console.log('Delete the account');
      }
    });
  }

  openAlertDialog() {
    this.scAlertDialogTrigger.open(
      'Are you absolutely sure?',
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      'Continue',
    );
  }
}
