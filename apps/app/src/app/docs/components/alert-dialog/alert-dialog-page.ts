import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlertDialogDemoSection } from './alert-dialog-demo-section';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [AlertDialogDemoSection],
  template: `
    <app-alert-dialog-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {}
