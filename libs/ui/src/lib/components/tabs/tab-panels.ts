import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScTabContent } from './tab-content';
import { ScTabsService } from './tabs.service';

@Component({
  selector: 'div[sc-tab-panels]',
  imports: [NgTemplateOutlet],
  template: `
    @for (tabDirective of tabDirectives; track $index) {
      @if (tabDirective.tabId === activeTabId()) {
        <ng-container [ngTemplateOutlet]="tabDirective.templateRef"></ng-container>
      }
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTabPanels {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.classInput(),
    ),
  );

  private readonly scTabsService = inject(ScTabsService);

  protected readonly activeTabId = computed(() => this.scTabsService.activeTabId());

  @ContentChildren(ScTabContent) tabDirectives!: QueryList<ScTabContent>;
}
