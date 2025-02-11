import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'a[sc-pagination-next]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {},
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext extends ScButtonBase {}
