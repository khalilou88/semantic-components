import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PaginationDemoSection } from './pagination-demo-section';

@Component({
  selector: 'app-pagination-page',
  imports: [PaginationDemoSection],
  template: `
    <app-pagination-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationPage {}
