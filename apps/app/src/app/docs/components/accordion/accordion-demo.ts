import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionHeader,
  ScAccordionItem,
  ScAccordionToggle,
} from '@semantic-components/ui';
import { SiChevronDownIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionItem,
    ScAccordionHeader,
    ScAccordionContent,
    ScAccordionToggle,
    SiChevronDownIcon,
  ],
  template: `
    <sc-accordion class="w-full">
      <sc-accordion-item>
        <sc-accordion-header>
          <sc-accordion-toggle>
            Is it accessible?
            <svg
              class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
              si-chevron-down-icon
            ></svg>
          </sc-accordion-toggle>
        </sc-accordion-header>
        <sc-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</sc-accordion-content>
      </sc-accordion-item>
      <sc-accordion-item>
        <sc-accordion-header>
          <sc-accordion-toggle>
            Is it styled?
            <svg
              class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
              si-chevron-down-icon
            ></svg>
          </sc-accordion-toggle>
        </sc-accordion-header>
        <sc-accordion-content>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </sc-accordion-content>
      </sc-accordion-item>
      <sc-accordion-item>
        <sc-accordion-header>
          <sc-accordion-toggle>
            Is it animated?
            <svg
              class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
              si-chevron-down-icon
            ></svg>
          </sc-accordion-toggle>
        </sc-accordion-header>
        <sc-accordion-content>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </sc-accordion-content>
      </sc-accordion-item>
    </sc-accordion>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDemo {}
