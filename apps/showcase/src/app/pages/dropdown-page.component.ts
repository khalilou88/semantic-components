import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DropdownComponent, DropdownItemComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-dropdown-page',
  standalone: true,
  imports: [CommonModule, DropdownComponent, DropdownItemComponent],
  template: `
    <p>nav-page works!</p>

    <sc-dropdown>
      <ng-container ngProjectAs="dropdown-items">
        <sc-dropdown-item text="Dashboard" />
        <sc-dropdown-item text="Settings" />
        <sc-dropdown-item text="Earnings" />
        <sc-dropdown-item text="Sign out" />
      </ng-container>
    </sc-dropdown>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownPageComponent {}
