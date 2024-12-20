import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSidebar, ScSidebarProvider, ScSidebarTrigger } from '@semantic-components/ui';

@Component({
  selector: 'app-sidebar-page',
  imports: [ScSidebarProvider, ScSidebar, ScSidebarTrigger],
  template: `
    <sc-sidebar-provider>
      <sc-sidebar></sc-sidebar>

      <main>
        <sc-sidebar-trigger />

        <ng-content />
      </main>
    </sc-sidebar-provider>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarPage {}
