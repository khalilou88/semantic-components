import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InputDemo } from './input-demo';

@Component({
  selector: 'app-input-demo-section',
  imports: [InputDemo],
  template: `
    <app-input-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemoSection {}
