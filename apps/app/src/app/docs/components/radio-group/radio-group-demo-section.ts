import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { RadioGroupDemo } from './radio-group-demo';

@Component({
  selector: 'app-radio-group-demo-section',
  imports: [RadioGroupDemo],
  template: `
    <app-radio-group-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupDemoSection {}
