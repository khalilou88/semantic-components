import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavComponent, ScNavLink } from '@semantic-components/ui';

@Component({
  selector: 'app-nav-page',
  imports: [NavComponent, ScNavLink, RouterLink],
  template: `
    <sc-nav />

    <nav>
      <ul>
        <li>
          <a sc-nav-link routerLink="home">Home</a>
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
