import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxDemo } from './checkbox-demo';

@Component({
  selector: 'app-checkbox-demo-section',
  imports: [CheckboxDemo],
  template: `
    <app-checkbox-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoSection {}
