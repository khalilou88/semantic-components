import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';
import { SiTerminalIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-alert-demo',
  imports: [ScAlert, ScAlertTitle, ScAlertDescription, SiTerminalIcon],
  template: `
    <div sc-alert>
      <svg si-terminal-icon></svg>
      <h5 sc-alert-title>Heads up!</h5>
      <p sc-alert-description>You can add components to your app using the cli.</p>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemo {}
