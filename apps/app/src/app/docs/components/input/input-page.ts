import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InputDemoSection } from './input-demo-section';
import { InputFormSection } from './input-form-section';
import { InputWithButtonSection } from './input-with-button-section';
import { InputWithLabelSection } from './input-with-label-section';

@Component({
  selector: 'app-input-page',
  imports: [InputDemoSection, InputWithButtonSection, InputFormSection, InputWithLabelSection],
  template: `
    <app-input-demo-section />

    <app-input-with-label-section title="With Label" />

    <app-input-with-button-section title="With Button" />

    <app-input-form-section title="Form" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPage {}
