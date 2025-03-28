import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { LabelDemo } from './label-demo';

@Component({
  selector: 'app-label-demo-section',
  imports: [PreviewCodeTabs, LabelDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-label-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScCheckbox, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-label-demo',
  imports: [ScLabel, ScCheckbox],
  template: \`
    <div class="flex items-center space-x-2">
      <input id="terms" sc-checkbox />
      <label sc-label for="terms">Accept terms and conditions</label>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelDemo {}`;
}
