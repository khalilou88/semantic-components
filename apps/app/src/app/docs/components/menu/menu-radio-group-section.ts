import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { MenuRadioGroup } from './menu-radio-group';

@Component({
  selector: 'app-menu-radio-group-section',
  imports: [PreviewCodeTabs, MenuRadioGroup],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-menu-radio-group />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuRadioGroupSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
