import { DialogModule } from '@angular/cdk/dialog';
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
  ScDialog,
  ScDialogClose,
  ScDialogContent,
  ScDialogDescription,
  ScDialogFooter,
  ScDialogHeader,
  ScDialogManager,
  ScDialogTitle,
  ScInput,
  ScLabel,
} from '@semantic-components/ui';
import { SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-dialog-demo',
  imports: [
    DialogModule,
    ScButton,
    ScDialog,
    ScDialogHeader,
    ScDialogTitle,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogClose,
    SiXIcon,
    ScDialogContent,
    ScButton,
    ScLabel,
    ScInput,
  ],
  template: `
    <button (click)="openDialog()" sc-button variant="secondary">Open dialog</button>

    <ng-template #dialog>
      <div sc-dialog>
        <div sc-dialog-content>
          <button sc-dialog-close>
            <svg class="size-4" si-x-icon></svg>
            <span class="sr-only">Close</span>
          </button>

          <div sc-dialog-header>
            <h2 sc-dialog-title>Edit profile</h2>

            <p sc-dialog-description>
              Make changes to your profile here. Click save when you're done.
            </p>
          </div>

          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <label class="text-right" sc-label for="name">Name</label>
              <input class="col-span-3" id="name" sc-input value="Pedro Duarte" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <label class="text-right" sc-label for="username">Username</label>
              <input class="col-span-3" id="username" sc-input value="@peduarte" />
            </div>
          </div>

          <div sc-dialog-footer>
            <button sc-button type="submit">Save changes</button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemo {
  private readonly dialogManger = inject(ScDialogManager);

  private readonly dialogRef = viewChild.required<TemplateRef<unknown>>('dialog');

  protected openDialog() {
    this.dialogManger.open(this.dialogRef());
  }
}
