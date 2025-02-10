import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  effect,
  input,
  output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '@semantic-components/utils';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiChevronsLeftIcon,
  SiChevronsRightIcon,
} from '@semantic-icons/lucide-icons';

import { ScLink } from '../link';
import { ScOption, ScSelect } from '../select';
import { ScPageEvent } from './page-event';
import { ScPageItem } from './page-item';
import { ScPagination } from './pagination';

/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 10;

@Component({
  selector: 'sc-paginator',
  exportAs: 'scPaginator',
  imports: [
    ScPageItem,
    ReactiveFormsModule,
    ScPagination,
    ScLink,
    SiChevronLeftIcon,
    SiChevronsLeftIcon,
    SiChevronRightIcon,
    SiChevronsRightIcon,
    ScSelect,
    ScOption,
  ],
  template: `
    <ng-content />

    @if (!hidePageSize()) {
      <div>
        <label class="" for="items-per-page">Items per page:</label>
        <sc-select class="inline-block" id="items-per-page" [formControl]="pageSizeFormControl">
          @for (pageSizeOption of pageSizeOptions(); track $index) {
            <sc-option [value]="pageSizeOption">{{ pageSizeOption }}</sc-option>
          }
        </sc-select>
      </div>
    }

    <!--div class="">
      Showing
      <span>{{ firstItemPage() }}-{{ lastItemPage() }}</span>
      of
      <span>{{ totalSize() }}</span>
    </div-->

    <nav class="col-span-2" sc-pagination>
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
            [currentPage]="currentPage()"
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
    </nav>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginator implements OnInit {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('grid grid-cols-4 grid-rows-1 gap-4', this.classInput()),
  );

  /** The one-based page index of the displayed list of items. Defaulted to 1. */
  readonly currentPage = input<number>(1);

  /** The total number of items that are being paginated. */
  readonly totalSize = input.required<number>();

  /** The set of provided page size options to display to the user. */
  readonly pageSizeOptions = input<number[]>([5, DEFAULT_PAGE_SIZE, 25]);

  /** Number of items to display on a page. By default, set to 10. */
  readonly pageSize = input<number>(DEFAULT_PAGE_SIZE);

  /** Whether to hide the page size selection UI from the user. */
  readonly hidePageSize = input<boolean>(false);

  /** Whether to show the first/last buttons UI to the user. */
  readonly showFirstLastLinks = input<boolean>(false);

  /** Event emitted when the paginator changes the page index. */
  readonly pageChanged = output<ScPageEvent>();

  constructor() {
    //TODO find a better way
    effect(() => {
      this.pageSizeFormControl.setValue(this.pageSize());
    });
  }

  ngOnInit() {
    this.pageSizeFormControl.valueChanges.subscribe((value) => {
      if (value) {
        this.pageChanged.emit({ page: 1, pageSize: value });
      }
    });
  }

  pageSizeFormControl = new FormControl(this.pageSize());

  numberOfPages = computed(() => Math.ceil(this.totalSize() / this.pageSize()));

  range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  //https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3238804
  pageRanges = computed<(number | '...')[]>(() => {
    const totalPages = this.numberOfPages();

    if (totalPages < 7) {
      return this.range(1, totalPages);
    }

    const currentPage = this.currentPage();

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

  firstItemPage = computed(() => {
    if (this.totalSize() === 0) {
      return 0;
    }
    return this.pageSize() * (this.currentPage() - 1) + 1;
  });

  lastItemPage = computed(() => {
    const a = this.firstItemPage() + this.pageSize() - 1;

    if (a < this.totalSize()) {
      return a;
    }

    return this.totalSize();
  });

  firstPage() {
    this.pageChanged.emit({ page: 1, pageSize: this.pageSize() });
  }

  nextPage() {
    if (!this.isNextPageDisabled()) {
      this.pageChanged.emit({ page: this.currentPage() + 1, pageSize: this.pageSize() });
    }
  }

  isNextPageDisabled = computed(() => {
    return this.currentPage() === this.numberOfPages();
  });

  lastPage() {
    this.pageChanged.emit({ page: this.numberOfPages(), pageSize: this.pageSize() });
  }

  prevPage() {
    if (!this.isPrevPageDisabled()) {
      this.pageChanged.emit({ page: this.currentPage() - 1, pageSize: this.pageSize() });
    }
  }

  isPrevPageDisabled = computed(() => {
    return this.currentPage() === 1;
  });

  changePage(page: number) {
    this.pageChanged.emit({ page: page, pageSize: this.pageSize() });
  }
}
