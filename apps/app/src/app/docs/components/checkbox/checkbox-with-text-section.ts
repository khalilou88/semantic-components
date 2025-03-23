import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CheckboxWithText } from './checkbox-with-text';

@Component({
  selector: 'app-checkbox-with-text-section',
  imports: [CheckboxWithText, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-checkbox-with-text />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWithTextSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-with-text',
  imports: [ScCheckbox],
  template: \`
    <div class="items-top flex space-x-2">
      <input id="terms1" sc-checkbox />
      <div class="grid gap-1.5 leading-none">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="terms1"
        >
          Accept terms and conditions
        </label>
        <p class="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWithText {}`;
}
