import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionHeader,
  ScAccordionItem,
  ScAccordionItemDescription,
  ScAccordionTrigger,
} from '@semantic-components/ui';
import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-accordion-page',
  imports: [
    SvgChevronDownIcon,
    ScAccordionHeader,
    ScAccordionTrigger,
    ScAccordion,
    ScAccordionItem,
    ScAccordionContent,
    ScAccordionItemDescription,
  ],
  template: `
    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <div class="w-full" sc-accordion data-orientation="vertical">
        <div sc-accordion-item data-state="closed" data-orientation="vertical">
          <h3 sc-accordion-header data-orientation="vertical" data-state="closed">
            <button
              id="radix-:r14n:"
              sc-accordion-trigger
              type="button"
              aria-controls="radix-:r14o:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <span sc-accordion-item-description>Is it accessible?</span>

              <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
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
          <h3 sc-accordion-header data-orientation="vertical" data-state="closed">
            <button
              id="radix-:r14p:"
              sc-accordion-trigger
              type="button"
              aria-controls="radix-:r14q:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <span sc-accordion-item-description>Is it styled?</span>

              <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
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
          <h3 sc-accordion-header data-orientation="vertical" data-state="closed">
            <button
              id="radix-:r14r:"
              sc-accordion-trigger
              type="button"
              aria-controls="radix-:r14s:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <span sc-accordion-item-description>Is it animated?</span>

              <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
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
