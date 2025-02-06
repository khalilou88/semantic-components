import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButtonBase } from './button-base';

@Component({
  selector: 'button[sc-button]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'button',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScButton extends ScButtonBase {}
