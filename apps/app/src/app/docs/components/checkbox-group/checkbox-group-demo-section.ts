import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CheckboxGroupDemo } from './checkbox-group-demo';

@Component({
  selector: 'app-checkbox-group-demo-section',
  imports: [CheckboxGroupDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code">
      <app-checkbox-group-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupDemoSection {
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
