import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton } from '../button';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar-toggler',
  imports: [ScButton],
  template: `
    <button
      class="size-7"
      (click)="toggleSidebar()"
      sc-button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
    >
      <ng-content />
      <span class="sr-only">Toggle Sidebar</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarToggler {
  sidebarState = inject(ScSidebarState);
  toggleSidebar() {
    this.sidebarState.toggleSidebar();
  }
}
