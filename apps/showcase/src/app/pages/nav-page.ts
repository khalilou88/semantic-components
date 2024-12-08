import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScNavLink, ScNavList } from '@semantic-components/ui';

@Component({
  selector: 'app-nav-page',
  imports: [ScNavLink, RouterLink, ScNavList],
  template: `
    <nav>
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
      </ul>
    </nav>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavPage {}
