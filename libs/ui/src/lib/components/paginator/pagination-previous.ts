import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'a[sc-pagination-previous]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {},
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationPrevious extends ScButtonBase {}
