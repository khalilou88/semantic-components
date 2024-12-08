import { NgClass } from '@angular/common';
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

import { ScPageEvent } from './page-event';
import { ScPageItem } from './page-item';

/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 10;

@Component({
  selector: 'sc-paginator',
  imports: [ScPageItem, ReactiveFormsModule, NgClass],
  template: `
    <nav
      class="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      @if (!hidePageSize()) {
        <div>
          <label class="text-sm font-normal text-gray-500 dark:text-gray-400" for="items-per-page">
            Items per page:
          </label>
          <select
            class="w-14 rounded border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="items-per-page"
            [formControl]="pageSizeFormControl"
          >
            @for (pageSizeOption of pageSizeOptions(); track $index) {
              <option [value]="pageSizeOption">{{ pageSizeOption }}</option>
            }
          </select>
        </div>
      }

      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">
          {{ firstItemPage() }}-{{ lastItemPage() }}
        </span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">{{ totalSize() }}</span>
      </span>
      <ul class="inline-flex items-stretch -space-x-px">
        @if (showFirstLastButtons()) {
          <li>
            <a
              class="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              [ngClass]="
                isPrevPageDisabled()
                  ? ''
                  : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'
              "
              [attr.disabled]="isPrevPageDisabled()"
              (click)="firstPage()"
              href="javascript:void(0)"
            >
              <span class="sr-only">First page</span>
              <svg
                class="size-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m17 16-4-4 4-4m-6 8-4-4 4-4"
                />
              </svg>
            </a>
          </li>
        }

        <li>
          <a
            class="ml-0 flex h-full items-center justify-center border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
            [ngClass]="{
              'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white':
                !isPrevPageDisabled(),
              'rounded-l-lg': !showFirstLastButtons(),
            }"
            [attr.disabled]="isPrevPageDisabled()"
            (click)="prevPage()"
            href="javascript:void(0)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="size-5"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
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
            class="flex h-full items-center justify-center border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
            [attr.disabled]="isNextPageDisabled()"
            [ngClass]="{
              'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white':
                !isNextPageDisabled(),
              'rounded-r-lg': !showFirstLastButtons(),
            }"
            (click)="nextPage()"
            href="javascript:void(0)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="size-5"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        @if (showFirstLastButtons()) {
          <li>
            <a
              class="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              [attr.disabled]="isNextPageDisabled()"
              [ngClass]="
                isNextPageDisabled()
                  ? ''
                  : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'
              "
              (click)="lastPage()"
              href="javascript:void(0)"
            >
              <span class="sr-only">Last page</span>
              <svg
                class="size-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 16 4-4-4-4m6 8 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: ``,
  host: {
    role: 'group',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginator implements OnInit {
  /** The one-based page index of the displayed list of items. Defaulted to 1. */
  currentPage = input<number>(1);

  /** The total number of items that are being paginated. */
  totalSize = input.required<number>();

  /** The set of provided page size options to display to the user. */
  pageSizeOptions = input<number[]>([5, DEFAULT_PAGE_SIZE, 25]);

  /** Number of items to display on a page. By default set to 10. */
  pageSize = input<number>(DEFAULT_PAGE_SIZE);

  /** Whether to hide the page size selection UI from the user. */
  hidePageSize = input<boolean>(false);

  /** Whether to show the first/last buttons UI to the user. */
  showFirstLastButtons = input<boolean>(false);

  /** Event emitted when the paginator changes the page index. */
  pageChanged = output<ScPageEvent>();

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
