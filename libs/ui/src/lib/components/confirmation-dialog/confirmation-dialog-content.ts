import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
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
import { ScConfirmationDialogDescription } from './confirmation-dialog-description';
import { ScConfirmationDialogFooter } from './confirmation-dialog-footer';
import { ScConfirmationDialogHeader } from './confirmation-dialog-header';
import { ScConfirmationDialogTitle } from './confirmation-dialog-title';

@Component({
  selector: 'sc-confirmation-dialog-content',
  imports: [
    ScButton,
    ScConfirmationDialogFooter,
    ScConfirmationDialogHeader,
    ScConfirmationDialogDescription,
    ScConfirmationDialogTitle,
  ],
  template: `
    <div sc-confirmation-dialog-header>
      <h2 sc-confirmation-dialog-title>{{ data.title }}</h2>

      <p sc-confirmation-dialog-description>
        {{ data.message }}
      </p>
    </div>

    <div sc-confirmation-dialog-footer>
      <button class="mt-2 sm:mt-0" (click)="dialogRef.close(false)" variant="outline" sc-button>
        {{ data.cancelButtonText }}
      </button>
      <button (click)="dialogRef.close(true)" sc-button>{{ data.actionButtonText }}</button>
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
export class ScConfirmationDialogContent {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
      this.classInput(),
    ),
  );

  //TODO make this working
  readonly state = signal<'open' | 'closed'>('closed');

  readonly dialogRef = inject(DialogRef);
  readonly data = inject(DIALOG_DATA);

  constructor() {
    this.dialogRef.disableClose = true;
  }
}
