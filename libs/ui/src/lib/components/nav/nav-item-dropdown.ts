import { CdkMenu, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { ScNavButton } from './nav-button';

@Component({
  selector: 'li[sc-nav-item-dropdown]',
  imports: [CdkMenuTrigger, CdkMenu, ScNavButton],
  template: `
    <button [cdkMenuTriggerFor]="menu" sc-nav-button type="button">{{ title() }}</button>
    <ng-template #menu>
      <div
        cdkMenu
        lass="origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-(--radix-navigation-menu-viewport-width)"
      >
        <div
          class="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto"
        >
          <ng-content />
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavItemDropdown {
  title = input.required<string>();
}
