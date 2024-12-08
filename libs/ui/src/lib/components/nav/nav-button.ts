import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScNavButtonBase } from './nav-button-base';

@Component({
  selector: 'button[sc-nav-button]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {},
  styleUrl: './nav-button-base.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavButton extends ScNavButtonBase {}
