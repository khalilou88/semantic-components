import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxDemoSection } from './checkbox-demo-section';
import { CheckboxDisabledSection } from './checkbox-disabled-section';
import { CheckboxWithTextSection } from './checkbox-with-text-section';

@Component({
  selector: 'app-checkbox-page',
  imports: [CheckboxDemoSection, CheckboxWithTextSection, CheckboxDisabledSection],
  template: `
    <app-checkbox-demo-section />

    <app-checkbox-with-text-section />

    <app-checkbox-disabled-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
