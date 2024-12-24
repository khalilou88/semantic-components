import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SvgChevronDownIcon, SvgChevronUpIcon } from '@semantic-icons/lucide-icons';

import { ScAccordionHeader } from './accordion-header';
import { ScAccordionTrigger } from './accordion-trigger';

@Component({
  selector: 'sc-accordion-item',
  imports: [
    CdkAccordionModule,
    SvgChevronDownIcon,
    SvgChevronUpIcon,
    ScAccordionHeader,
    ScAccordionTrigger,
  ],
  template: `
    <cdk-accordion-item #accordionItem="cdkAccordionItem">
      <h3 sc-accordion-header>
        <button (click)="accordionItem.toggle()" sc-accordion-trigger type="button">
          <ng-content select="sc-accordion-item-description" />

          @if (accordionItem.expanded) {
            <svg-chevron-up-icon class="size-4 shrink-0 transition-transform duration-200" />
          } @else {
            <svg-chevron-down-icon class="size-4 shrink-0 transition-transform duration-200" />
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
