import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ProgressIndeterminateState } from './progress-indeterminate-state';

@Component({
  selector: 'app-progress-indeterminate-state-section',
  imports: [PreviewCodeTabs, ProgressIndeterminateState],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-progress-indeterminate-state />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndeterminateStateSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-progress-indeterminate-state',
  imports: [ScProgress],
  template: \`
    <sc-progress mode="indeterminate" />
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndeterminateState {}`;
}
