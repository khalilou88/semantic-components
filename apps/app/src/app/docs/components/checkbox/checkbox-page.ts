import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxDemoSection } from './checkbox-demo-section';
import { CheckboxDisabledSection } from './checkbox-disabled-section';
import { CheckboxIndeterminateSection } from './checkbox-indeterminate-section';
import { CheckboxWithTextSection } from './checkbox-with-text-section';

@Component({
  selector: 'app-checkbox-page',
  imports: [
    CheckboxDemoSection,
    CheckboxWithTextSection,
    CheckboxDisabledSection,
    CheckboxIndeterminateSection,
  ],
  template: `
    <app-checkbox-demo-section />

    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight my-10">Examples</h2>

    <app-checkbox-with-text-section title="With text" level="3" />

    <app-checkbox-disabled-section title="Disabled State" level="3" />

    <app-checkbox-indeterminate-section title="Indeterminate State" level="3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
