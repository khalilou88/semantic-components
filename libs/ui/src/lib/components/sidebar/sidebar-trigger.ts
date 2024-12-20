import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgPanelLeftIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar-trigger',
  imports: [ScButton, SvgPanelLeftIcon],
  template: `
    <button
      class="h-7 w-7"
      (click)="toggleSidebar()"
      sc-button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
    >
      <svg-panel-left-icon />
      <span class="sr-only">Toggle Sidebar</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarTrigger {
  sidebarState = inject(ScSidebarState);
  toggleSidebar() {
    this.sidebarState.toggleSidebar();
  }
}
