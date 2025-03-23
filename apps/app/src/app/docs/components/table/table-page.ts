import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TableDemoSection } from './table-demo-section';

@Component({
  selector: 'app-table-page',
  imports: [TableDemoSection],
  template: `
    <app-table-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {}
