import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlertDemo } from './alert-demo';

@Component({
  selector: 'app-alert-demo-section',
  imports: [AlertDemo],
  template: `
    <app-alert-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoSection {}
