import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-accordion-page',
  imports: [SvgChevronDownIcon],
  template: `
    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <div class="w-full" data-orientation="vertical">
        <div class="border-b" data-state="closed" data-orientation="vertical">
          <h3 class="flex" data-orientation="vertical" data-state="closed">
            <button
              class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
              id="radix-:r14n:"
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
        <div class="border-b" data-state="closed" data-orientation="vertical">
          <h3 class="flex" data-orientation="vertical" data-state="closed">
            <button
              class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
              id="radix-:r14p:"
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
        <div class="border-b" data-state="closed" data-orientation="vertical">
          <h3 class="flex" data-orientation="vertical" data-state="closed">
            <button
              class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
              id="radix-:r14r:"
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
