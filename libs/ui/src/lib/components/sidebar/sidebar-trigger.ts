import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgPanelLeftIcon, SvgXIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar-trigger',
  imports: [ScButton, SvgPanelLeftIcon, SvgXIcon],
  template: `
    <button
      class="size-7"
      (click)="toggleSidebar()"
      sc-button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
    >
      @if (sidebarState.isMobile() && sidebarState.openMobile()) {
        <svg-x-icon />
      } @else {
        <svg-panel-left-icon />
      }

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
