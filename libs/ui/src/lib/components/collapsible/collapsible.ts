import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { cn } from '../../utils';
import { ScCollapsibleState } from './collapsible-state';

@Component({
  selector: 'sc-collapsible',
  imports: [CdkAccordionModule],
  template: `
    <cdk-accordion>
      <cdk-accordion-item #accordionItem="cdkAccordionItem">
        <ng-content />

        @if (accordionItem.expanded) {
          <ng-content select="sc-collapsible-content" />
        }
      </cdk-accordion-item>
    </cdk-accordion>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScCollapsibleState],
})
export class ScCollapsible {
  state = inject(ScCollapsibleState);

  class = input<string>('');

  classes = computed(() => cn('block', this.class()));

  accordionItem = viewChild.required<CdkAccordionItem>('accordionItem');

  constructor() {
    this.state.isToggled.pipe(takeUntilDestroyed()).subscribe(() => {
      this.accordionItem().toggle();
    });
  }
}
