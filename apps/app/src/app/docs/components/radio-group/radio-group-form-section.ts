import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { RadioGroupForm } from './radio-group-form';

@Component({
  selector: 'app-radio-group-form-section',
  imports: [PreviewCodeTabs, RadioGroupForm],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-radio-group-form />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupFormSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
