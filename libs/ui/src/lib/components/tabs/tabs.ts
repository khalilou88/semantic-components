import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  effect,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScTab } from './tab';
import { ScTabsService } from './tabs.service';

@Component({
  selector: 'div[sc-tabs]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScTabsService],
})
export class ScTabs {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  readonly value = input.required<string>();

  private readonly scTabsService = inject(ScTabsService);

  readonly tabs = contentChildren(ScTab, { descendants: true });

  constructor() {
    effect(() => {
      const v = this.value();
      if (v) {
        this.scTabsService.activeTabId.set(v);
      } else {
        this.scTabsService.activeTabId.set(this.tabs()[0].value());
      }
    });
  }
}
