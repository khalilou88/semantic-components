import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { cn } from '@semantic-components/utils';

import { ScPageEvent } from './page-event';
import { DEFAULT_PAGE_SIZE, PaginatorService } from './paginator.service';

@Component({
  selector: 'div[sc-paginator]',
  exportAs: 'scPaginator',
  imports: [ReactiveFormsModule],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PaginatorService],
})
export class ScPaginator implements OnInit {
  protected readonly paginatorService = inject(PaginatorService);

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

  /** Event emitted when the paginator changes the page index. */
  readonly pageChanged = output<ScPageEvent>();

  constructor() {
    effect(() => {
      this.paginatorService.currentPage.set(this.currentPage());
    });

    effect(() => {
      this.paginatorService.totalSize.set(this.totalSize());
    });

    effect(() => {
      this.paginatorService.pageSizeOptions.set(this.pageSizeOptions());
    });

    effect(() => {
      this.paginatorService.pageSize.set(this.pageSize());
    });

    effect(() => {
      this.paginatorService.pageSizeFormControl.setValue(this.pageSize());
    });

    effect(() => {
      this.pageChanged.emit(this.paginatorService.pageChanged());
    });
  }

  ngOnInit() {
    this.paginatorService.pageSizeFormControl.valueChanges.subscribe((value) => {
      if (value) {
        this.pageChanged.emit({ page: 1, pageSize: value });
      }
    });
  }

  readonly firstItemPage = computed(() => this.paginatorService.firstItemPage());

  readonly lastItemPage = computed(() => this.paginatorService.lastItemPage());

  private range(start: number, end: number) {
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
}
