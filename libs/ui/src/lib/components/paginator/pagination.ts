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

import { ScLink } from '../link';
import { ScPageEvent } from './page-event';
import { ScPageItem } from './page-item';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'nav[sc-pagination]',
  imports: [
    ScLink,
    ScPageItem,
    SiChevronLeftIcon,
    SiChevronsLeftIcon,
    SiChevronRightIcon,
    SiChevronsRightIcon,
  ],
  template: `
    <ul class="flex flex-row items-center gap-1">
      @if (showFirstLastLinks()) {
        <li>
          <a
            [disabled]="isPrevPageDisabled()"
            [attr.aria-label]="'Go to first page'"
            (click)="firstPage()"
            (keydown.enter)="firstPage()"
            sc-link
            variant="outline"
            size="icon"
          >
            <svg si-chevrons-left-icon></svg>
            <span class="sr-only">First page</span>
          </a>
        </li>
      }

      <li>
        <a
          [disabled]="isPrevPageDisabled()"
          [attr.aria-label]="'Go to previous page'"
          (click)="prevPage()"
          (keydown.enter)="prevPage()"
          sc-link
          variant="outline"
          size="icon"
        >
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
        <a
          [disabled]="isNextPageDisabled()"
          [attr.aria-label]="'Go to next page'"
          (click)="nextPage()"
          (keydown.enter)="nextPage()"
          sc-link
          variant="outline"
          size="icon"
        >
          <svg si-chevron-right-icon></svg>
          <span class="sr-only">Next page</span>
        </a>
      </li>

      @if (showFirstLastLinks()) {
        <li>
          <a
            [disabled]="isNextPageDisabled()"
            [attr.aria-label]="'Go to last page'"
            (click)="lastPage()"
            (keydown.enter)="lastPage()"
            sc-link
            variant="outline"
            size="icon"
          >
            <svg si-chevrons-right-icon></svg>
            <span class="sr-only">Last page</span>
          </a>
        </li>
      }
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
  readonly paginatorService = inject(PaginatorService);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('mx-auto flex w-full justify-center', this.classInput()),
  );

  /** Whether to show the first/last buttons UI to the user. */
  readonly showFirstLastLinks = input<boolean>(false);

  /** Event emitted when the paginator changes the page index. */
  readonly pageChanged = output<ScPageEvent>();

  range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  //https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3238804
  pageRanges = computed<(number | '...')[]>(() => {
    const totalPages = this.numberOfPages();

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

  numberOfPages = computed(() =>
    Math.ceil(this.paginatorService.totalSize() / this.paginatorService.pageSize()),
  );

  firstItemPage = computed(() => {
    if (this.paginatorService.totalSize() === 0) {
      return 0;
    }
    return this.paginatorService.pageSize() * (this.paginatorService.currentPage() - 1) + 1;
  });

  lastItemPage = computed(() => {
    const a = this.firstItemPage() + this.paginatorService.pageSize() - 1;

    if (a < this.paginatorService.totalSize()) {
      return a;
    }

    return this.paginatorService.totalSize();
  });

  firstPage() {
    this.pageChanged.emit({ page: 1, pageSize: this.paginatorService.pageSize() });
  }

  nextPage() {
    if (!this.isNextPageDisabled()) {
      this.pageChanged.emit({
        page: this.paginatorService.currentPage() + 1,
        pageSize: this.paginatorService.pageSize(),
      });
    }
  }

  isNextPageDisabled = computed(() => {
    return this.paginatorService.currentPage() === this.numberOfPages();
  });

  lastPage() {
    this.pageChanged.emit({
      page: this.numberOfPages(),
      pageSize: this.paginatorService.pageSize(),
    });
  }

  prevPage() {
    if (!this.isPrevPageDisabled()) {
      this.pageChanged.emit({
        page: this.paginatorService.currentPage() - 1,
        pageSize: this.paginatorService.pageSize(),
      });
    }
  }

  isPrevPageDisabled = computed(() => {
    return this.paginatorService.currentPage() === 1;
  });

  changePage(page: number) {
    this.pageChanged.emit({ page: page, pageSize: this.paginatorService.pageSize() });
  }
}
