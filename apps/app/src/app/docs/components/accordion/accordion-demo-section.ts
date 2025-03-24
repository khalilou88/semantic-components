import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AccordionDemo } from './accordion-demo';

@Component({
  selector: 'app-accordion-demo-section',
  imports: [AccordionDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-accordion-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

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
  template: \`
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
        <sc-accordion-content>
          <div class="pb-4 pt-0">Yes. It adheres to the WAI-ARIA design pattern.</div>
        </sc-accordion-content>
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
          <div class="pb-4 pt-0">
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </div>
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
          <div class="pb-4 pt-0">
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </div>
        </sc-accordion-content>
      </sc-accordion-item>
    </sc-accordion>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDemo {}`;
}
