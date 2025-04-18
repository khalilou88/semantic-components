import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { DialogDemoSection } from './dialog-demo-section';

@Component({
  selector: 'app-dialog-page',
  imports: [DialogDemoSection],
  template: `
    <app-dialog-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogPage {}
