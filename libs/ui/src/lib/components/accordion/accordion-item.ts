import { CdkAccordionItem } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-accordion-item',
  imports: [],
  template: `
    <ng-content select="sc-accordion-header" />
    @if (cdkAccordionItem.expanded) {
      <ng-content select="sc-accordion-content" />
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkAccordionItem],
})
export class ScAccordionItem {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block border-b', this.classInput()));

  protected readonly cdkAccordionItem = inject(CdkAccordionItem);

  toggle() {
    this.cdkAccordionItem.toggle();
  }
}
