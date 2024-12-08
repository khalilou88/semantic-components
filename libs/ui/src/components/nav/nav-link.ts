import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScNavButtonBase } from './nav-button-base';

@Component({
  selector: 'a[sc-nav-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    routerLinkActive: 'active-page',
    ariaCurrentWhenActive: 'page',
  },
  styleUrl: './nav-button-base.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavLink extends ScNavButtonBase {}
