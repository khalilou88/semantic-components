import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ToastDestructive } from './toast-destructive';

@Component({
  selector: 'app-toast-destructive-section',
  imports: [PreviewCodeTabs, ToastDestructive],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-toast-destructive />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDestructiveSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
