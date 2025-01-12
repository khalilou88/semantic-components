import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  AfterViewInit,
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
      <button class="mt-2 sm:mt-0" (click)="close(false)" variant="outline" sc-button>
        {{ data.cancelButtonText }}
      </button>
      <button (click)="close(true)" sc-button>{{ data.actionButtonText }}</button>
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
export class ScConfirmationDialogContent implements AfterViewInit {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-lg',
      this.classInput(),
    ),
  );

  private readonly state = signal<'open' | 'closed'>('closed');

  readonly dialogRef = inject(DialogRef);
  readonly data = inject(DIALOG_DATA);

  constructor() {
    this.dialogRef.disableClose = true;
  }

  ngAfterViewInit() {
    this.state.set('open');
  }

  close(b: boolean) {
    this.state.set('closed');

    setTimeout(() => {
      this.dialogRef.close(b);
    }, 200);
  }
}
