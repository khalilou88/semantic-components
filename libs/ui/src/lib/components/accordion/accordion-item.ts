import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiChevronDownIcon, SiChevronUpIcon } from '@semantic-icons/lucide-icons';

import { ScAccordionHeader } from './accordion-header';
import { ScAccordionTrigger } from './accordion-trigger';

@Component({
  selector: 'sc-accordion-item',
  imports: [
    CdkAccordionModule,
    SiChevronDownIcon,
    SiChevronUpIcon,
    ScAccordionHeader,
    ScAccordionTrigger,
  ],
  template: `
    <cdk-accordion-item #accordionItem="cdkAccordionItem">
      <h3 sc-accordion-header>
        <button (click)="accordionItem.toggle()" sc-accordion-trigger type="button">
          <ng-content select="sc-accordion-item-description" />

          @if (accordionItem.expanded) {
            <svg class="size-4 shrink-0 transition-transform duration-200" si-chevron-up-icon></svg>
          } @else {
            <svg
              class="size-4 shrink-0 transition-transform duration-200"
              si-chevron-down-icon
            ></svg>
          }
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
