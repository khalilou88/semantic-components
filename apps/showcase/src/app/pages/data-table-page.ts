import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScDataTable } from '@semantic-components/ui';

@Component({
  selector: 'app-data-table-page',
  imports: [ScDataTable],
  template: `
    <sc-data-table />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DataTablePage {}
