import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScDropdown, ScDropdownDivider, ScDropdownItem } from '@semantic-components/ui';

@Component({
  selector: 'app-dropdown-page',
  imports: [ScDropdown, ScDropdownItem, ScDropdownDivider],
  template: `
    <sc-dropdown>
      <ng-container ngProjectAs="dropdown-items">
        <sc-dropdown-item text="Dashboard" />
        <sc-dropdown-item text="Settings" />
        <sc-dropdown-item text="Earnings" />
        <sc-dropdown-divider />
        <sc-dropdown-item text="Sign out" />
      </ng-container>
    </sc-dropdown>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownPage {}
