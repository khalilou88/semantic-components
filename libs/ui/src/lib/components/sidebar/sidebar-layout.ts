import { DOCUMENT } from '@angular/common';
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
import { ScSidebar } from './sidebar';

@Component({
  selector: 'sc-sidebar-layout',
  imports: [ScSidebar, SvgPanelLeftIcon, RouterModule, ScButton],
  template: `
    <div
      class="group peer hidden md:block text-sidebar-foreground"
      [attr.data-state]="state()"
      [attr.data-collapsible]="state() === 'collapsed' ? 'collapsible' : ''"
      [attr.data-variant]="variant()"
      [attr.data-side]="side()"
    >
      <sc-sidebar />
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

  opened = signal<boolean>(true);

  ngOnInit() {
    document.documentElement.classList.add('h-full');
    this.document.body.classList.add('h-full');
  }

  toggleSidebar() {
    this.opened.update((value) => !value);
  }
}
