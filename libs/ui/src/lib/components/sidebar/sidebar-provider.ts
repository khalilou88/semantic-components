import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

const SIDEBAR_WIDTH = '16rem';
export const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';

@Component({
  selector: 'sc-sidebar-provider',
  imports: [],
  template: `
    <div
      class="group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"
      [style]="myStyle()"
    >
      <ng-content />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarProvider {
  myStyle = signal(
    `--sidebar-width: ${SIDEBAR_WIDTH}, --sidebar-width-icon: ${SIDEBAR_WIDTH_ICON}`,
  );
}
