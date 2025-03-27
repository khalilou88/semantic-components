import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  viewChild,
} from '@angular/core';

import { ScButton, ScDialogManager } from '@semantic-components/ui';

@Component({
  selector: 'app-dialog-demo',
  imports: [ScButton],
  template: `
    <button (click)="openDialog()" sc-button variant="secondary">Open dialog</button>

    <ng-template #dialog>Test</ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemo {
  dialogManger = inject(ScDialogManager);

  private readonly dialogRef = viewChild.required<TemplateRef<unknown>>('dialog');

  openDialog() {
    this.dialogManger.open(this.dialogRef());
  }
}
