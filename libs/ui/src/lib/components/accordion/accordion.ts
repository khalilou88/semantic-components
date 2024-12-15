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
  selector: 'sc-accordion',
  imports: [CdkAccordionModule],
  template: `
    <cdk-accordion>
      <ng-content />
    </cdk-accordion>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordion {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));
}
