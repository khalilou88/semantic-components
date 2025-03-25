import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScButton } from '../button';
import { ScAlertDialogDescription } from './alert-dialog-description';
import { ScAlertDialogFooter } from './alert-dialog-footer';
import { ScAlertDialogHeader } from './alert-dialog-header';
import { ScAlertDialogManager } from './alert-dialog-manager';
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
      <h2 sc-alert-dialog-title>{{ data.title }}</h2>

      <p sc-alert-dialog-description>
        {{ data.description }}
      </p>
    </div>

    {{ state() }}

    <div sc-alert-dialog-footer>
      <button class="mt-2 sm:mt-0" (click)="close(false)" variant="outline" sc-button>
        Cancel
      </button>
      <button (click)="close(true)" sc-button>{{ data.action }}</button>
    </div>
  `,
  host: {
    '[class]': 'class()',
    '(animationend)': 'handleAnimationEnd($event)',
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
      'z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-lg',
      this.classInput(),
    ),
  );

  private readonly dialogRef = inject(DialogRef);
  protected readonly data = inject(DIALOG_DATA);

  private readonly scAlertDialogManager = inject(ScAlertDialogManager);

  protected readonly state = computed(() => this.scAlertDialogManager.state());

  constructor() {
    this.dialogRef.disableClose = true;
  }

  private response = false;

  protected handleAnimationEnd(event: AnimationEvent): void {
    console.log(event);
    if (event.target === event.currentTarget) {
      this.dialogRef.close(this.response);
    }
  }

  protected close(response: boolean) {
    this.scAlertDialogManager.state.set('closed');
    this.response = response;
  }
}
