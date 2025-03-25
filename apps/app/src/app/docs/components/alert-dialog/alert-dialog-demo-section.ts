import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlertDialogDemo } from './alert-dialog-demo';

@Component({
  selector: 'app-alert-dialog-demo-section',
  imports: [AlertDialogDemo],
  template: `
    <app-alert-dialog-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogDemoSection {}
