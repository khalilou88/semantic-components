import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxDemoSection } from './checkbox-demo-section';

@Component({
  selector: 'app-checkbox-page',
  imports: [CheckboxDemoSection],
  template: `
    <app-checkbox-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
