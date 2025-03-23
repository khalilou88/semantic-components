import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ButtonDemoSection } from './button-demo-section';

@Component({
  selector: 'app-button-page',
  imports: [ButtonDemoSection],
  template: `
    <app-button-demo-section />

    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight my-10">Examples</h2>

    <app-button-demo-section title="Variants" level="3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonPage {}
