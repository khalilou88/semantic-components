import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSidebarMenuBase } from './sidebar-menu-base';

@Component({
  selector: 'button[sc-sidebar-menu-button]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[attr.data-sidebar]': '"menu-button"',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarMenuButton extends ScSidebarMenuBase {}
