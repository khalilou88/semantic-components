import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import {
  ScSidebar,
  ScSidebarProvider,
  ScSidebarState,
  ScSidebarToggler,
} from '@semantic-components/ui';
import { SvgPanelLeftIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-sidebar-page',
  imports: [ScSidebarProvider, ScSidebar, ScSidebarToggler, SvgPanelLeftIcon],
  template: `
    <sc-sidebar-provider>
      <sc-sidebar>
        <div class="border-2 border-red-600">Sidebar</div>
      </sc-sidebar>

      <main>
        <sc-sidebar-toggler>
          <svg-panel-left-icon />
        </sc-sidebar-toggler>

        <br />
        <br />
        open : {{ sidebarState.open() }}
        <br />
        openMobile : {{ sidebarState.openMobile() }}
        <br />
        isMobile : {{ sidebarState.isMobile() }}

        <ng-content />
      </main>
    </sc-sidebar-provider>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarPage {
  sidebarState = inject(ScSidebarState);
}
