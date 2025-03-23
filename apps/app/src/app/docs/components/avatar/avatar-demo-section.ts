import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AvatarDemo } from './avatar-demo';

@Component({
  selector: 'app-avatar-demo-section',
  imports: [AvatarDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-avatar-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';
import { SiTerminalIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-alert-demo',
  imports: [ScAlert, ScAlertTitle, ScAlertDescription, SiTerminalIcon],
  template: \`
    <div sc-alert>
      <svg si-terminal-icon></svg>
      <h5 sc-alert-title>Heads up!</h5>
      <p sc-alert-description>You can add components to your app using the cli.</p>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemo {}`;
}
