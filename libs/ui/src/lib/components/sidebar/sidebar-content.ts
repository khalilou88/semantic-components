import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-sidebar-content',
  imports: [],
  template: `
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
    <p>sidebar-content works!</p>
  `,
  styles: `
    sc-sidebar-content {
      @apply flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarContent {}
