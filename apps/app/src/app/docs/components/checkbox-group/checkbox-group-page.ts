import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxGroupDemoSection } from './checkbox-group-demo-section';

@Component({
  selector: 'app-checkbox-group-page',
  imports: [CheckboxGroupDemoSection],
  template: `
    <app-checkbox-group-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxGroupPage {}
