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

          <div
            id="radix-:r14o:"
            sc-accordion-content
            data-state="closed"
            hidden=""
            role="region"
            aria-labelledby="radix-:r14n:"
            data-orientation="vertical"
            style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"
          ></div>
        </div>
        <div sc-accordion-item data-state="closed" data-orientation="vertical">
          <sc-accordion-item-description>Is it styled?</sc-accordion-item-description>

          <div
            id="radix-:r14q:"
            sc-accordion-content
            data-state="closed"
            hidden=""
            role="region"
            aria-labelledby="radix-:r14p:"
            data-orientation="vertical"
            style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"
          ></div>
        </div>
        <div sc-accordion-item data-state="closed" data-orientation="vertical">
          <sc-accordion-item-description>Is it animated?</sc-accordion-item-description>

          <div
            id="radix-:r14s:"
            sc-accordion-content
            data-state="closed"
            hidden=""
            role="region"
            aria-labelledby="radix-:r14r:"
            data-orientation="vertical"
            style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"
          ></div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPage {}
