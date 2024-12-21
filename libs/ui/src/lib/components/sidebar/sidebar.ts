import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { cn } from '../../utils';
import { ScSheet, ScSheetConfig, ScSheetTrigger } from '../sheet';
import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar',
  imports: [LayoutModule, ScSheet],
  template: `
    @if (collapsible() === 'none') {
      <div class="flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground">
        <ng-content />
      </div>
    } @else if (isMobile()) {
      <ng-template #mobile_sidebar>
        <div
          class="size-full bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          [side]="side()"
          sc-sheet
          data-sidebar="sidebar"
          data-mobile="true"
        >
          <div class="flex size-full flex-col">
            <ng-content />
          </div>
        </div>
      </ng-template>
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
  mobileSidebarRef = viewChild.required<TemplateRef<unknown>>('mobile_sidebar');

  constructor(private observer: BreakpointObserver) {
    this.observer.observe('(max-width: 768px)').subscribe((result) => {
      this.sidebarState.isMobile.set(result.matches);

      if (!result.matches && this.openMobile()) {
        this.scSheetTrigger.close();
        this.sidebarState.openMobile.set(false);
      }
    });

    effect(() => {
      if (this.isMobile() && this.openMobile()) {
        const config = new ScSheetConfig();
        config.side = this.side();
        config.width = SIDEBAR_WIDTH_MOBILE;
        this.scSheetTrigger.open(this.mobileSidebarRef(), config);
      }
    });
  }
}
