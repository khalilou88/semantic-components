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

@Component({
  selector: 'sc-accordion-item',
  imports: [CdkAccordionModule, SiChevronDownIcon, SiChevronUpIcon, ScAccordionHeader],
  template: `
    <cdk-accordion-item #accordionItem="cdkAccordionItem">
      <ng-content select="sc-accordion-header" />
      @if (accordionItem.expanded) {
        <ng-content select="sc-accordion-content" />
      }
    </cdk-accordion-item>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionItem {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block border-b', this.classInput()));
}
