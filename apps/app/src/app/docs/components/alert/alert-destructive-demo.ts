import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';
import { SiCircleAlertIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-alert-destructive-demo',
  imports: [ScAlert, ScAlertTitle, ScAlertDescription, SiCircleAlertIcon],
  template: `
    <div sc-alert variant="destructive">
      <svg si-circle-alert-icon></svg>
      <h5 sc-alert-title>Error</h5>
      <p sc-alert-description>Your session has expired. Please log in again.</p>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDestructiveDemo {}
