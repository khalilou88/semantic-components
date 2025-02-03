import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { ScSidebarMenuBase } from './sidebar-menu-base';

@Component({
  selector: 'a[sc-sidebar-menu-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[attr.data-sidebar]': '"menu-link"',
    '[attr.data-active]': 'routerLinkActive.isActive',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [RouterLinkActive],
})
export class ScSidebarMenuLink extends ScSidebarMenuBase {
  protected readonly routerLinkActive = inject(RouterLinkActive);
}
