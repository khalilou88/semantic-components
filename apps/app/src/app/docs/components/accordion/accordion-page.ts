import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AccordionDemoSection } from './accordion-demo-section';

@Component({
  selector: 'app-accordion-page',
  imports: [AccordionDemoSection],
  template: `
    <app-accordion-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPage {}
