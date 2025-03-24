import { CdkAccordionItem } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScAccordionItemState } from './accordion-item-state';

@Component({
  selector: 'sc-accordion-item',
  imports: [],
  template: `
    <ng-content select="sc-accordion-header" />
    @if (open()) {
      <ng-content select="sc-accordion-content" />
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScAccordionItemState],
  hostDirectives: [CdkAccordionItem],
})
export class ScAccordionItem implements OnInit {
  private readonly scAccordionItemState = inject(ScAccordionItemState);

  protected readonly open = computed(() => this.scAccordionItemState.open());

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block border-b', this.classInput()));

  protected readonly cdkAccordionItem = inject(CdkAccordionItem);

  toggle() {
    this.cdkAccordionItem.toggle();
  }

  ngOnInit(): void {
    this.cdkAccordionItem.opened.subscribe(() => {
      this.scAccordionItemState.open.set(true);
    });

    this.cdkAccordionItem.closed.subscribe(() => {
      this.scAccordionItemState.state.set('closed');
    });
  }
}
