import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CheckboxDemo } from './checkbox-demo';

@Component({
  selector: 'app-checkbox-demo-section',
  imports: [CheckboxDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-checkbox-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-demo',
  imports: [ScCheckbox, ScLabel],
  template: \`
    <div class="flex items-center space-x-2">
      <input id="terms" sc-checkbox />
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="terms"
        sc-label
      >
        Accept terms and conditions
      </label>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemo {}`;
}
