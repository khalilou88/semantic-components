import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScTabsService } from './tabs.service';

@Component({
  selector: 'button[sc-tab]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'tab',
    '[class]': 'class()',
    '[attr.data-state]': "isActive() ? 'active' : ''",
    '[attr.aria-selected]': 'isActive()',
    '[attr.aria-controls]': "'tabpanel-' + value()",
    '[attr.tabindex]': 'isActive() ? 0 : -1',
    '(click)': 'selectTab()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTab {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
      this.classInput(),
    ),
  );

  readonly value = input.required<string>();

  private readonly scTabsService = inject(ScTabsService);

  protected readonly isActive = computed(() => this.value() === this.scTabsService.activeTabId());

  protected selectTab() {
    this.scTabsService.activeTabId.set(this.value());
  }
}
