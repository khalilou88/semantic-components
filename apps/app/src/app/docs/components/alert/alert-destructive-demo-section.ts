import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlertDestructiveDemo } from './alert-destructive-demo';

@Component({
  selector: 'app-alert-destructive-demo-section',
  imports: [AlertDestructiveDemo],
  template: `
    <app-alert-destructive-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDestructiveDemoSection {}
