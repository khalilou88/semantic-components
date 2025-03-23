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
  protected readonly code = ``;
}
