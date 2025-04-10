import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
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
    afterNextRender(() => {
      this.scTabsService.tabs.set(this.tabs());
    });

    effect(() => {
      const v = this.value();
      if (v) {
        this.scTabsService.activeTab.set({ id: v });
      } else {
        this.scTabsService.activeTab.set({ id: this.tabs()[0].value() });
      }
    });
  }
}
