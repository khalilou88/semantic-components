import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton, ScDialog } from '@semantic-components/ui';

@Component({
  selector: 'app-dialog-page',
  imports: [DialogModule, ScButton],
  template: `
    <button (click)="openDialog()" sc-button variant="secondary">Open dialog</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogPage {
  dialog = inject(Dialog);

  openDialog() {
    this.dialog.open(ScDialog, {
      minWidth: '300px',
    });
  }
}
