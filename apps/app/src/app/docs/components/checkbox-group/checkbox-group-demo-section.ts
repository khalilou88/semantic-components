import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxGroupDemo } from './checkbox-group-demo';

@Component({
  selector: 'app-checkbox-group-demo-section',
  imports: [CheckboxGroupDemo],
  template: `
    <app-checkbox-group-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupDemoSection {}
