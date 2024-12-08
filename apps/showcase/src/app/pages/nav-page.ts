import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScNav, ScNavItemDropdown, ScNavLink, ScNavList } from '@semantic-components/ui';

@Component({
  selector: 'app-nav-page',
  imports: [ScNavLink, RouterLink, ScNavList, ScNav, ScNavItemDropdown],
  template: `
    <nav sc-nav>
      <ul sc-nav-list>
        <li>
          <a sc-nav-link routerLink="/home">Home</a>
        </li>
        <li>
          <a sc-nav-link routerLink="about">About</a>
        </li>
        <li>
          <a sc-nav-link routerLink="shop">Shop</a>
        </li>

        <li sc-nav-item-dropdown title="Dropdown">
          <ul>
            <li><a sc-nav-link href="#">Action</a></li>
            <li><a sc-nav-link href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a sc-nav-link href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavPage {}
