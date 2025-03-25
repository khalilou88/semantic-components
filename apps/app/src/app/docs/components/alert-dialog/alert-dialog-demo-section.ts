import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AlertDialogDemo } from './alert-dialog-demo';

@Component({
  selector: 'app-alert-dialog-demo-section',
  imports: [AlertDialogDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-alert-dialog-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScAlertDialogManager, ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-alert-dialog-demo',
  imports: [ScButton],
    <div class="flex items-center justify-center">
      <button (click)="deleteAccount()" sc-button variant="secondary">Show Dialog</button>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogDemo {
  private readonly scAlertDialogManager = inject(ScAlertDialogManager);

  async deleteAccount() {
    const actionConfirmed = await this.scAlertDialogManager.open(
      'Are you absolutely sure?',
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      'Continue',
    );

    if (actionConfirmed) {
      console.log('Delete the account');
    } else {
      console.log('Action canceled');
    }
  }
}`;
}
