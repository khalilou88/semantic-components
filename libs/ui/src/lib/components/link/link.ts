import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'a[sc-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'link',
    tabIndex: '0',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLink extends ScButtonBase {}
