import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AlertDestructiveDemo } from './alert-destructive-demo';

@Component({
  selector: 'app-alert-destructive-demo-section',
  imports: [PreviewCodeTabs, AlertDestructiveDemo],
  template: `
    <app-preview-code-tabs [code]="code" title="Destructive" level="3">
      <app-alert-destructive-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDestructiveDemoSection {
  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';
import { SiCircleAlertIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-alert-destructive-demo',
  imports: [ScAlert, ScAlertTitle, ScAlertDescription, SiCircleAlertIcon],
  template: \`
    <div sc-alert variant="destructive">
      <svg si-circle-alert-icon></svg>
      <h5 sc-alert-title>Error</h5>
      <p sc-alert-description>Your session has expired. Please log in again.</p>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDestructiveDemo {}`;
}
