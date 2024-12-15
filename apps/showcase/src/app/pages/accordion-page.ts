import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScAccordion,
  ScAccordionHeader,
  ScAccordionItem,
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
              Is it accessible?

              <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
          <div
            class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            id="radix-:r14o:"
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
              Is it styled?

              <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
          <div
            class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            id="radix-:r14q:"
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
              Is it animated?

              <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
          <div
            class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            id="radix-:r14s:"
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
