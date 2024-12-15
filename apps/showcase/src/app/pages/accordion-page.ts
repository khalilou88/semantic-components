import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionItem,
  ScAccordionItemDescription,
} from '@semantic-components/ui';

@Component({
  selector: 'app-accordion-page',
  imports: [ScAccordion, ScAccordionItem, ScAccordionContent, ScAccordionItemDescription],
  template: `
    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <div class="w-full" sc-accordion data-orientation="vertical">
        <div sc-accordion-item data-state="closed" data-orientation="vertical">
          <sc-accordion-item-description>Is it accessible?</sc-accordion-item-description>

          <sc-accordion-content
            id="radix-:r14o:"
            data-state="closed"
            hidden=""
            role="region"
            aria-labelledby="radix-:r14n:"
            data-orientation="vertical"
          >
            Yes. It adheres to the WAI-ARIA design pattern.
          </sc-accordion-content>
        </div>
        <div sc-accordion-item data-state="closed" data-orientation="vertical">
          <sc-accordion-item-description>Is it styled?</sc-accordion-item-description>

          <sc-accordion-content
            id="radix-:r14q:"
            data-state="closed"
            hidden=""
            role="region"
            aria-labelledby="radix-:r14p:"
            data-orientation="vertical"
          >
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </sc-accordion-content>
        </div>
        <div sc-accordion-item data-state="closed" data-orientation="vertical">
          <sc-accordion-item-description>Is it animated?</sc-accordion-item-description>

          <sc-accordion-content
            id="radix-:r14s:"
            data-state="closed"
            hidden=""
            role="region"
            aria-labelledby="radix-:r14r:"
            data-orientation="vertical"
          >
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </sc-accordion-content>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPage {}
