import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlertDemoSection } from './alert-demo-section';
import { AlertDestructiveDemoSection } from './alert-destructive-demo-section';

@Component({
  selector: 'app-alert-page',
  imports: [AlertDemoSection, AlertDestructiveDemoSection],
  template: `
    <app-alert-demo-section />

    <app-alert-destructive-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertPage {}
