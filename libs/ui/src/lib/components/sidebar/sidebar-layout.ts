import { DOCUMENT, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SvgPanelLeftIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { SIDEBAR_WIDTH } from './constants';
import { ScSidebar } from './sidebar';

@Component({
  selector: 'sc-sidebar-layout',
  imports: [ScSidebar, SvgPanelLeftIcon, RouterModule, ScButton, NgClass],
  template: `
    <div
      class="group peer hidden md:block text-sidebar-foreground"
      [attr.data-state]="state()"
      [attr.data-collapsible]="state() === 'collapsed' ? 'collapsible' : ''"
      [attr.data-variant]="variant()"
      [attr.data-side]="side()"
    >
      <!-- This is what handles the sidebar gap on desktop -->
      <div
        class="duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180"
        [style.width.rem]="sidebarWidth()"
        [ngClass]="
          variant() === 'floating' || variant() === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
        "
      ></div>

      <div
        class="duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex"
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
        <sc-sidebar />
      </div>
    </div>

    <main class="border-2 border-green-600">
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
      @apply flex min-h-svh w-full border-2 border-rose-600;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarLayout implements OnInit {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  state = signal<string>('');

  side = signal<'left' | 'right'>('left');
  variant = signal<'sidebar' | 'floating' | 'inset'>('sidebar');
  // collapsible = signal<'offcanvas' | 'icon' | 'none'>('offcanvas');

  sidebarWidth = signal<number>(SIDEBAR_WIDTH);

  opened = signal<boolean>(true);

  ngOnInit() {
    document.documentElement.classList.add('h-full');
    this.document.body.classList.add('h-full');
  }

  toggleSidebar() {
    this.opened.update((value) => !value);
  }
}
