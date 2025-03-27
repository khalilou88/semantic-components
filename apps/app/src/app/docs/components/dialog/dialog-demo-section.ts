import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { DialogDemo } from './dialog-demo';

@Component({
  selector: 'app-dialog-demo-section',
  imports: [PreviewCodeTabs, DialogDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-dialog-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
