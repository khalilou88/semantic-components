import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { DOCUMENT, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Inject,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

import { SvgPanelLeftIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_MOBILE } from './constants';
import { ScSidebar } from './sidebar';

@Component({
  selector: 'sc-sidebar-layout',
  imports: [ScSidebar, SvgPanelLeftIcon, RouterModule, ScButton, NgClass, LayoutModule],
  template: `
    <div
      class="group peer hidden text-sidebar-foreground md:block"
      [attr.data-state]="state()"
      [attr.data-collapsible]="state() === 'collapsed' ? 'collapsible' : ''"
      [attr.data-variant]="variant()"
      [attr.data-side]="side()"
    >
      <!-- This is what handles the sidebar gap on desktop -->
      <div
        class="relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180"
        [style.width.rem]="sidebarWidth()"
        [ngClass]="
          variant() === 'floating' || variant() === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
        "
      ></div>

      <div
        class="fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex"
        [style.width.rem]="sidebarWidth()"
        [ngClass]="{
          'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]':
            side() === 'left',
          'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]':
            side() !== 'left',
          'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]':
            variant() === 'floating' || variant() === 'inset',
          'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l':
            variant() !== 'floating' && variant() !== 'inset',
        }"
      >
        <sc-sidebar
          [side]="side()"
          [variant]="variant()"
          [collapsible]="collapsible()"
          [sidebarWidth]="sidebarWidth()"
          [isMobile]="isMobile()"
        />
      </div>
    </div>

    <main class="z-50">
      <button
        (click)="toggleSidebar()"
        sc-button
        type="button"
        size="icon"
        variant="ghost"
        data-sidebar="trigger"
      >
        <svg-panel-left-icon />
        <span class="sr-only">Toggle Sidebar</span>
      </button>

      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
    sc-sidebar-layout {
      @apply flex min-h-svh w-full;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarLayout implements OnInit {
  breakpointObserver = inject(BreakpointObserver);
  destroyRef = inject(DestroyRef);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  open = linkedSignal<boolean>(() => {
    if (this.isMobile()) {
      return false;
    }

    return true;
  });

  state = computed<'expanded' | 'collapsed'>(() => {
    return this.open() ? 'expanded' : 'collapsed';
  });

  isMobile = signal<boolean>(false);

  side = signal<'left' | 'right'>('left');
  variant = signal<'sidebar' | 'floating' | 'inset'>('sidebar');
  collapsible = signal<'offcanvas' | 'icon' | 'none'>('offcanvas');

  sidebarWidth = computed<number>(() => {
    if (this.open() && !this.isMobile()) {
      return SIDEBAR_WIDTH;
    }

    if (this.open() && this.isMobile()) {
      return SIDEBAR_WIDTH_MOBILE;
    }

    return 0;
  });

  ngOnInit() {
    document.documentElement.classList.add('h-full');
    this.document.body.classList.add('h-full');

    this.breakpointObserver
      .observe(`(min-width: 1024px)`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        console.log(state);
      });
  }

  toggleSidebar() {
    this.open.update((value) => !value);
  }
}
