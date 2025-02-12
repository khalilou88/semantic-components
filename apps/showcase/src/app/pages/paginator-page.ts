import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import {
  ScPageEvent,
  ScPageSizeSelect,
  ScPaginationFirst,
  ScPaginationLast,
  ScPaginationLink,
  ScPaginationList,
  ScPaginationNext,
  ScPaginationPrevious,
  ScPaginator,
  ScPaginatorContainer,
} from '@semantic-components/ui';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiChevronsLeftIcon,
  SiChevronsRightIcon,
  SiEllipsisIcon,
} from '@semantic-icons/lucide-icons';
import { ScPagination } from 'libs/ui/src/lib/components/paginator/pagination';
import { ScPaginationEllipsis } from 'libs/ui/src/lib/components/paginator/pagination-ellipsis';

@Component({
  selector: 'app-paginator-page',
  imports: [
    ScPaginator,
    ScPagination,
    ScPageSizeSelect,
    ScPaginatorContainer,
    SiChevronLeftIcon,
    SiChevronsLeftIcon,
    SiChevronRightIcon,
    SiChevronsRightIcon,
    ScPaginationFirst,
    ScPaginationPrevious,
    ScPaginationLast,
    ScPaginationNext,
    ScPaginationLink,
    SiEllipsisIcon,
    ScPaginationEllipsis,
    ScPaginationList,
  ],
  template: `
    <div class="m-10">
      <sc-paginator-container>
        <div
          #p="scPaginator"
          [currentPage]="currentPage()"
          [pageSize]="pageSize()"
          [totalSize]="totalSize()"
          (pageChanged)="setPageEvent($event)"
          sc-paginator
        >
          Items per page:

          <div sc-page-size-select></div>

          <div class="">
            Showing
            <span>{{ p.firstItemPage() }}-{{ p.lastItemPage() }}</span>
            of
            <span>{{ p.totalSize() }}</span>
          </div>

          <nav class="col-span-2" sc-pagination>
            <ul sc-pagination-list>
              <li>
                <a sc-pagination-first>
                  <svg si-chevrons-left-icon></svg>
                  <span class="sr-only">First page</span>
                </a>
              </li>

              <li>
                <a sc-pagination-previous>
                  <svg si-chevron-left-icon></svg>
                  <span class="sr-only">Previous page</span>
                </a>
              </li>

              @for (page of p.pageRanges(); track $index) {
                <li>
                  @if (page === '...') {
                    <span sc-pagination-ellipsis>
                      <svg class="size-4" si-ellipsis-icon></svg>
                      <span class="sr-only">More pages</span>
                    </span>
                  } @else {
                    <a [page]="page" sc-pagination-link>
                      {{ page }}
                    </a>
                  }
                </li>
              }

              <li>
                <a sc-pagination-next>
                  <svg si-chevron-right-icon></svg>
                  <span class="sr-only">Next page</span>
                </a>
              </li>

              <li>
                <a sc-pagination-last>
                  <svg si-chevrons-right-icon></svg>
                  <span class="sr-only">Last page</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </sc-paginator-container>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginatorPage {
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalSize = signal<number>(65);

  setPageEvent(pageEvent: ScPageEvent) {
    this.currentPage.set(pageEvent.page);
    this.pageSize.set(pageEvent.pageSize);
  }
}
