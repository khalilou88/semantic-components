import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-accordion',
  imports: [CdkAccordionModule],
  template: `
    <cdk-accordion>
      <ng-content />
    </cdk-accordion>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordion {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));
}
