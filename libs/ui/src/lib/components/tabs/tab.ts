import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  effect,
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
    '[attr.id]': "'tab-' + value()",
    '[class]': 'class()',
    '[attr.data-state]': "isActive() ? 'active' : ''",
    '[attr.aria-selected]': 'isActive()',
    '[attr.aria-controls]': "'tab-panel-' + value()",
    '[attr.tabindex]': 'isActive() ? 0 : -1',
    '(click)': 'selectTab()',
    '(keydown)': 'onKeydown($event)',
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

  private readonly host = inject(ElementRef);

  constructor() {
    effect(() => {
      const v = this.scTabsService.focusTabId();
      if (v && v === this.value()) {
        this.host.nativeElement.focus();
      }
    });
  }

  protected selectTab() {
    this.scTabsService.activeTabId.set(this.value());
    this.scTabsService.focusTabId.set('');
  }

  onKeydown(event: KeyboardEvent) {
    const currentIndex = this.scTabsService.tabs().findIndex((tab) => tab.value() === this.value());
    if (currentIndex === -1) return;

    let newIndex: number;

    switch (event.key) {
      case 'ArrowRight':
        newIndex = (currentIndex + 1) % this.scTabsService.tabs().length;
        this.scTabsService.focusTabId.set(this.scTabsService.tabs()[newIndex].value());
        event.preventDefault();
        break;
      case 'ArrowLeft':
        newIndex =
          (currentIndex - 1 + this.scTabsService.tabs().length) % this.scTabsService.tabs().length;
        this.scTabsService.focusTabId.set(this.scTabsService.tabs()[newIndex].value());
        event.preventDefault();
        break;
      case 'Home':
        this.scTabsService.focusTabId.set(this.scTabsService.tabs()[0].value());
        event.preventDefault();
        break;
      case 'End':
        this.scTabsService.focusTabId.set(
          this.scTabsService.tabs()[this.scTabsService.tabs().length - 1].value(),
        );
        event.preventDefault();
        break;
    }
  }
}
