import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ToastSimple } from './toast-simple';

@Component({
  selector: 'app-toast-simple-section',
  imports: [PreviewCodeTabs, ToastSimple],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-toast-simple />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastSimpleSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
