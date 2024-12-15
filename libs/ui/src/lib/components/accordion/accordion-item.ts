import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';
import { ScAccordionHeader } from './accordion-header';
import { ScAccordionTrigger } from './accordion-trigger';

@Component({
  selector: 'div[sc-accordion-item]',
  imports: [
    CdkAccordionModule,
    SvgChevronDownIcon,
    SvgChevronDownIcon,
    ScAccordionHeader,
    ScAccordionTrigger,
  ],
  template: `
    <cdk-accordion-item #accordionItem="cdkAccordionItem">
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
          <ng-content select="sc-accordion-item-description" />

          <svg-chevron-down-icon class="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
      </h3>

      @if (accordionItem.expanded) {
        <ng-content select="sc-accordion-content" />
      }
    </cdk-accordion-item>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionItem {
  class = input<string>('');

  classes = computed(() => cn('border-b', this.class()));
}
