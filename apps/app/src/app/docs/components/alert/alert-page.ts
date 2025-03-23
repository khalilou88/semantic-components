import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlertDemoSection } from './alert-demo-section';
import { AlertDestructiveDemoSection } from './alert-destructive-demo-section';

@Component({
  selector: 'app-alert-page',
  imports: [AlertDemoSection, AlertDestructiveDemoSection],
  template: `
    <app-alert-demo-section />

    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight my-10">Examples</h2>

    <app-alert-demo-section title="Default" level="3" />

    <app-alert-destructive-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertPage {}
