import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ToastWithTitle } from './toast-with-title';

@Component({
  selector: 'app-toast-with-title-section',
  imports: [PreviewCodeTabs, ToastWithTitle],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-toast-with-title />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastWithTitleSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
