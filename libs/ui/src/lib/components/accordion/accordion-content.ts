import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScAccordionItemState } from './accordion-item-state';

@Component({
  selector: 'sc-accordion-content',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
    '(animationend)': 'handleAnimationEnd($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionContent {
  private readonly scAccordionItemState = inject(ScAccordionItemState);

  protected readonly state = computed(() => this.scAccordionItemState.state());

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'block overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      this.classInput(),
    ),
  );

  protected handleAnimationEnd(event: AnimationEvent): void {
    if (event.target === event.currentTarget && event.animationName === 'accordion-up') {
      this.scAccordionItemState.open.set(false);
    }
  }
}
