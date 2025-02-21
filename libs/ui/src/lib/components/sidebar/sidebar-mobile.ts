import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { cn } from '@semantic-components/utils';
import { SiXIcon } from '@semantic-icons/lucide-icons';

import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { ScSidebarState } from './sidebar-state';
import { ScSidebarToggler } from './sidebar-toggler';

@Component({
  selector: 'sc-sidebar-mobile',
  imports: [ScSidebarToggler, SiXIcon],
  template: `
    <div class="flex size-full flex-col">
      <button class="absolute right-1 top-1 z-60" sc-sidebar-toggler>
        <svg si-x-icon></svg>
      </button>

      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'class()',
    '[style]': 'styles()',
    '[attr.data-sidebar]': '"sidebar"',
    '[attr.data-mobile]': '"true"',
    '[attr.data-state]': 'state()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarMobile {
  private readonly router = inject(Router);

  private readonly sidebarState = inject(ScSidebarState);

  protected readonly styles = signal(`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE};`);

  readonly side = input.required<'left' | 'right'>();
  private readonly openMobile = computed(() => this.sidebarState.openMobile());

  protected readonly state = computed<'open' | 'closed'>(() => {
    return this.openMobile() ? 'open' : 'closed';
  });

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'absolute top-0 h-full bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
      this.openMobile() && 'w-(--sidebar-width)',
      !this.openMobile() && 'w-0 overflow-hidden',
      this.side() === 'left' &&
        'left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
      this.side() === 'right' &&
        'right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      this.classInput(),
    ),
  );

  constructor() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.openMobile()) {
          this.sidebarState.toggleSidebar();
        }
      }
    });
  }
}
