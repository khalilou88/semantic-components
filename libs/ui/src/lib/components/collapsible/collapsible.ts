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

import { cn } from '@semantic-components/utils';

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
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScCollapsibleState],
})
export class ScCollapsible {
  state = inject(ScCollapsibleState);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  accordionItem = viewChild.required<CdkAccordionItem>('accordionItem');

  constructor() {
    this.state.isToggled.pipe(takeUntilDestroyed()).subscribe(() => {
      this.accordionItem().toggle();
    });
  }
}
