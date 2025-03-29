import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { RadioGroupDemoSection } from './radio-group-demo-section';
import { RadioGroupFormSection } from './radio-group-form-section';

@Component({
  selector: 'app-radio-group-page',
  imports: [RadioGroupDemoSection, RadioGroupFormSection],
  template: `
    <app-radio-group-demo-section />

    <app-radio-group-form-section title="Form" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
