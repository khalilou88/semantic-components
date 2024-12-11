import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgMenuIcon, SvgXIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar-toggler',
  imports: [ScButton, SvgMenuIcon, SvgXIcon],
  template: `
    <button
      (click)="toggle()"
      sc-button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      type="button"
    >
      @if (sidebarState.open()) {
        <svg-x-icon />
      }

      @if (!sidebarState.open()) {
        <svg-menu-icon />
      }

      <span class="sr-only">Toggle Sidebar</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarToggler {
  sidebarState = inject(ScSidebarState);

  toggle() {
    this.sidebarState.open.update((value) => !value);
  }
}
