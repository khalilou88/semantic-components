import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SwitchDemoSection } from './switch-demo-section';

@Component({
  selector: 'app-switch-page',
  imports: [SwitchDemoSection],
  template: `
    <app-switch-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchPage {}
