import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScAlertDialogTrigger, ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [ScButton],
  template: `
    <button (click)="openDialog()" sc-button variant="secondary">Open alert dialog</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {
  scAlertDialogTrigger = inject(ScAlertDialogTrigger);

  openDialog() {
    this.scAlertDialogTrigger.open();
  }
}
