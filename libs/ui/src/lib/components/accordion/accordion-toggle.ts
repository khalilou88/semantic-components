import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScAccordionItem } from './accordion-item';
import { ScAccordionItemState } from './accordion-item-state';

@Component({
  selector: 'sc-accordion-toggle',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '(click)': 'toggle()',
    '[attr.data-state]': 'state()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionToggle {
  private readonly scAccordionItem = inject(ScAccordionItem);

  private readonly scAccordionItemState = inject(ScAccordionItemState);

  protected readonly state = computed(() => this.scAccordionItemState.state());

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
      this.classInput(),
    ),
  );

  protected toggle() {
    this.scAccordionItem.toggle();
  }
}
