import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiChevronsLeftIcon,
  SiChevronsRightIcon,
} from '@semantic-icons/lucide-icons';

import { ScPageEvent } from './page-event';
import { ScPageItem } from './page-item';
import { ScPaginationFirst } from './pagination-first';
import { ScPaginationLast } from './pagination-last';
import { ScPaginationNext } from './pagination-next';
import { ScPaginationPrevious } from './pagination-previous';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'nav[sc-pagination]',
  imports: [
    ScPageItem,
    SiChevronLeftIcon,
    SiChevronsLeftIcon,
    SiChevronRightIcon,
    SiChevronsRightIcon,
    ScPaginationFirst,
    ScPaginationPrevious,
    ScPaginationLast,
    ScPaginationNext,
  ],
  template: `
    <ul class="flex flex-row items-center gap-1">
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

      @for (page of pageRanges(); track $index) {
        <sc-page-item
          [page]="page"
          [currentPage]="paginatorService.currentPage()"
          (pageChanged)="changePage($event)"
        />
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
  `,
  host: {
    role: 'navigation',
    'aria-label': 'pagination',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPagination {
  protected readonly paginatorService = inject(PaginatorService);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('mx-auto flex w-full justify-center', this.classInput()),
  );

  /** Event emitted when the paginator changes the page index. */
  readonly pageChanged = output<ScPageEvent>();

  range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  //https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3238804
  pageRanges = computed<(number | '...')[]>(() => {
    const totalPages = this.paginatorService.numberOfPages();

    if (totalPages < 7) {
      return this.range(1, totalPages);
    }

    const currentPage = this.paginatorService.currentPage();

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3;
      const leftRange = this.range(1, leftItemCount + 2);

      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3;
      const rightRange = this.range(totalPages - rightItemCount - 1, totalPages);

      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = this.range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }

    return this.range(1, totalPages);
  });

  changePage(page: number) {
    this.pageChanged.emit({ page: page, pageSize: this.paginatorService.pageSize() });
  }
}
