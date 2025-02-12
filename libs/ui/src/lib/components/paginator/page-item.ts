import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { SiEllipsisIcon } from '@semantic-icons/lucide-icons';

import { ScPaginationEllipsis } from './pagination-ellipsis';
import { ScPaginationLink } from './pagination-link';

@Component({
  selector: 'sc-page-item',
  imports: [ScPaginationLink, SiEllipsisIcon, ScPaginationEllipsis],
  template: `
    <li>
      @if (page() === '...') {
        <span sc-pagination-ellipsis>
          <svg class="size-4" si-ellipsis-icon></svg>
          <span class="sr-only">More pages</span>
        </span>
      } @else {
        <a [page]="page()" sc-pagination-link>
          {{ page() }}
        </a>
      }
    </li>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPageItem {
  readonly page = input.required<number | '...'>();
}
