import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'a[sc-pagination-last]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {},
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationLast extends ScButtonBase {}
