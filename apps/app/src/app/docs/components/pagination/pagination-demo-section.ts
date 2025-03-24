import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PaginationDemo } from './pagination-demo';

@Component({
  selector: 'app-pagination-demo-section',
  imports: [PaginationDemo],
  template: `
    <app-pagination-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationDemoSection {}
