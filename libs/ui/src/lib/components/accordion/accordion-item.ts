import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'div[sc-accordion-item]',
  imports: [CdkAccordionModule],
  template: `
    <cdk-accordion-item #accordionItem="cdkAccordionItem">
      <ng-content />
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
