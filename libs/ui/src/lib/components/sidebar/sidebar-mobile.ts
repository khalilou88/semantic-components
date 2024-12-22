import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from '@angular/core';

import { SvgXIcon } from '@semantic-icons/lucide-icons';

import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { ScSidebarState } from './sidebar-state';
import { ScSidebarToggler } from './sidebar-toggler';

@Component({
  selector: 'sc-sidebar-mobile',
  imports: [ScSidebarToggler, SvgXIcon, NgClass],
  template: `
    <div
      class="absolute top-0 left-0 h-full bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden transition ease-in-out duration-500"
      [ngClass]="
        openMobile()
          ? 'w-[--sidebar-width] slide-in-from-left'
          : 'w-0 overflow-hidden slide-out-to-left'
      "
      [style]="styles()"
      data-sidebar="sidebar"
      data-mobile="true"
    >
      <div class="flex size-full flex-col">
        <sc-sidebar-toggler class="absolute right-1 top-1">
          <svg-x-icon />
        </sc-sidebar-toggler>

        <br />
        <br />
        open : {{ sidebarState.open() }}
        <br />
        openMobile : {{ sidebarState.openMobile() }}
        <br />
        isMobile : {{ sidebarState.isMobile() }}

        <ng-content />
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarMobile {
  sidebarState = inject(ScSidebarState);

  styles = signal(`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE};`);

  openMobile = computed(() => this.sidebarState.openMobile());
}
