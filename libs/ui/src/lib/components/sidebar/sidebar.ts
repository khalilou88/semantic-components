import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScSidebarMobile } from './sidebar-mobile';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar',
  imports: [LayoutModule, NgTemplateOutlet, ScSidebarMobile],
  template: `
    <ng-template #sc_sidebar_content>
      <ng-content />
    </ng-template>

    @if (collapsible() === 'none') {
      <div class="flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground">
        <ng-container *ngTemplateOutlet="sc_sidebar_content" />
      </div>
    } @else if (isMobile()) {
      <sc-sidebar-mobile [side]="side()">
        <ng-container *ngTemplateOutlet="sc_sidebar_content" />
      </sc-sidebar-mobile>
    } @else {
      <div
        class="group peer hidden text-sidebar-foreground md:block"
        [attr.data-state]="state()"
        [attr.data-collapsible]="state() === 'collapsed' ? collapsible() : ''"
        [attr.data-variant]="variant()"
        [attr.data-side]="side()"
      >
        <!-- This is what handles the sidebar gap on desktop -->
        <div [class]="classes1()"></div>
        <div [class]="classes2()">
          <div
            class="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
            data-sidebar="sidebar"
          >
            <ng-container *ngTemplateOutlet="sc_sidebar_content" />
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
  private readonly observer = inject(BreakpointObserver);

  sidebarState = inject(ScSidebarState);

  class = input<string>('');

  classes = computed(() => cn('block relative', this.class()));

  side = input<'left' | 'right'>('left');
  variant = input<'sidebar' | 'floating' | 'inset'>('sidebar');
  collapsible = input<'offcanvas' | 'icon' | 'none'>('offcanvas');

  isMobile = computed(() => this.sidebarState.isMobile());
  openMobile = computed(() => this.sidebarState.openMobile());

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  state = computed(() => (this.sidebarState.open() ? 'expanded' : 'collapsed'));

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

  constructor() {
    this.observer.observe('(max-width: 768px)').subscribe((result) => {
      this.sidebarState.isMobile.set(result.matches);

      if (!result.matches && this.openMobile()) {
        this.sidebarState.openMobile.set(false);
      }
    });
  }
}
