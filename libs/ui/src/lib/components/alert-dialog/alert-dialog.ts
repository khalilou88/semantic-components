import { DialogRef } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScButton } from '../button';
import { ScAlertDialogDescription } from './alert-dialog-description';
import { ScAlertDialogFooter } from './alert-dialog-footer';
import { ScAlertDialogHeader } from './alert-dialog-header';
import { ScAlertDialogTitle } from './alert-dialog-title';

@Component({
  selector: 'sc-alert-dialog',
  imports: [
    ScButton,
    ScAlertDialogFooter,
    ScAlertDialogHeader,
    ScAlertDialogDescription,
    ScAlertDialogTitle,
  ],
  template: `
    <div sc-alert-dialog-header>
      <h2 sc-alert-dialog-title>Are you absolutely sure?</h2>

      <p sc-alert-dialog-description>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </p>
    </div>

    <div sc-alert-dialog-footer>
      <button class="mt-2 sm:mt-0" (click)="dialogRef.close()" variant="outline" sc-button>
        Cancel
      </button>
      <button sc-button>Continue</button>
    </div>
  `,
  host: {
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialog {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
      this.classInput(),
    ),
  );

  readonly state = signal<'open' | 'closed'>('open');

  readonly dialogRef = inject(DialogRef);

  constructor() {
    this.dialogRef.disableClose = true;
  }
}
