import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { MenuCheckboxes } from './menu-checkboxes';

@Component({
  selector: 'app-menu-checkboxes-section',
  imports: [PreviewCodeTabs, MenuCheckboxes],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-menu-checkboxes />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCheckboxesSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
