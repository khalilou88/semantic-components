import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';
import { SvgCircleAlertIcon, SvgTerminalIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-alert-page',
  imports: [ScAlert, ScAlertTitle, ScAlertDescription, SvgTerminalIcon, SvgCircleAlertIcon],
  template: `
    <div sc-alert>
      <svg-terminal-icon class="h-4 w-4" />
      <h5 sc-alert-title>Heads up!</h5>
      <p sc-alert-description>You can add components to your app using the cli.</p>
    </div>

    <br />
    <br />
    <br />
    <div sc-alert variant="destructive">
      <svg-circle-alert-icon class="h-4 w-4" />
      <h5 sc-alert-title>Error</h5>
      <p sc-alert-description>Your session has expired. Please log in again.</p>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertPage {}
