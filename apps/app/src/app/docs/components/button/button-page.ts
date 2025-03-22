import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ButtonDemoSection } from './button-demo-section';

@Component({
  selector: 'app-button-page',
  imports: [ButtonDemoSection],
  template: `
    <app-button-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonPage {}
