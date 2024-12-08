import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSidebarContent } from './sidebar-content';
import { ScSidebarFooter } from './sidebar-footer';
import { ScSidebarHeader } from './sidebar-header';

@Component({
  selector: 'sc-sidebar',
  imports: [ScSidebarHeader, ScSidebarFooter, ScSidebarContent],
  template: `
    <sc-sidebar-header />
    <sc-sidebar-content />
    <sc-sidebar-footer />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebar {}
