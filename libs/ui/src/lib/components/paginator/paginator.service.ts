import { Injectable, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

/** The default page size if there is no page size and there are no provided page size options. */
export const DEFAULT_PAGE_SIZE = 10;

@Injectable()
export class PaginatorService {
  /** The one-based page index of the displayed list of items. Defaulted to 1. */
  readonly currentPage = signal<number>(1);

  /** The total number of items that are being paginated. */
  readonly totalSize = signal<number>(0);

  /** The set of provided page size options to display to the user. */
  readonly pageSizeOptions = signal<number[]>([5, DEFAULT_PAGE_SIZE, 25]);

  /** Number of items to display on a page. By default, set to 10. */
  readonly pageSize = signal<number>(DEFAULT_PAGE_SIZE);

  readonly pageSizeFormControl = new FormControl(this.pageSize());
}
