import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';
import { ScSheetTrigger } from '../sheet';
import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar',
  imports: [LayoutModule],
  template: `
    @if (collapsible() === 'none') {
      <div class="flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground">
        <ng-content />
      </div>
    } @else if (isMobile()) {
      <ng-template #mobile_sidebar>
        <div sc-sheet>
          <div
            class="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            [style]="styles()"
            [attr.side]="side()"
            data-sidebar="sidebar"
            data-mobile="true"
            sc-sheet-content
          >
            <div class="flex h-full w-full flex-col">
              <ng-content />
            </div>
          </div>
        </div>
      </ng-template>
    } @else {
      <div
        class="group peer hidden md:block text-sidebar-foreground"
        [attr.data-state]="state()"
        [attr.data-collapsible]="state() === 'collapsed' ? collapsible() : ''"
        [attr.data-variant]="variant()"
        [attr.data-side]="side()"
      >
        <!-- This is what handles the sidebar gap on desktop -->
        <div [class]="classes1()"></div>
        <div [class]="classes2()">
          <div
            class="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
            data-sidebar="sidebar"
          >
            <ng-content />
          </div>
        </div>
      </div>
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebar {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  side = input<'left' | 'right'>('left');
  variant = input<'sidebar' | 'floating' | 'inset'>('sidebar');
  collapsible = input<'offcanvas' | 'icon' | 'none'>('offcanvas');

  sidebarState = inject(ScSidebarState);

  isMobile = computed(() => this.sidebarState.isMobile());
  openMobile = computed(() => this.sidebarState.openMobile());

  state = computed(() => this.sidebarState.state());

  styles = signal(`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE};`);

  classes1 = signal(
    cn(
      'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
      'group-data-[collapsible=offcanvas]:w-0',
      'group-data-[side=right]:rotate-180',
      this.variant() === 'floating' || this.variant() === 'inset'
        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
    ),
  );

  classes2 = signal(
    cn(
      'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
      this.side() === 'left'
        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
      // Adjust the padding for floating and inset variants.
      this.variant() === 'floating' || this.variant() === 'inset'
        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
    ),
  );

  scSheetTrigger = inject(ScSheetTrigger);

  constructor(private observer: BreakpointObserver) {
    this.observer.observe('(max-width: 640px)').subscribe((result) => {
      this.sidebarState.isMobile.set(result.matches);
    });

    effect(() => {
      if (this.isMobile() && this.openMobile()) this.scSheetTrigger.open();
    });
  }
}
