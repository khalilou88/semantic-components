import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InputDemoSection } from './input-demo-section';

@Component({
  selector: 'app-input-page',
  imports: [InputDemoSection],
  template: `
    <app-input-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPage {}
