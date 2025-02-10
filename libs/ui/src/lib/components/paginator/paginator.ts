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
import { ScPagination } from './pagination';
import { DEFAULT_PAGE_SIZE, PaginatorService } from './paginator.service';

@Component({
  selector: 'sc-paginator',
  exportAs: 'scPaginator',
  imports: [ReactiveFormsModule, ScPagination],
  template: `
    <ng-content />

    <nav
      class="col-span-2"
      [showFirstLastLinks]="showFirstLastLinks()"
      (pageChanged)="pageChanged.emit($event)"
      sc-pagination
    ></nav>
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

  /** Whether to show the first/last buttons UI to the user. */
  readonly showFirstLastLinks = input<boolean>(false);

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
  }

  ngOnInit() {
    this.paginatorService.pageSizeFormControl.valueChanges.subscribe((value) => {
      if (value) {
        this.pageChanged.emit({ page: 1, pageSize: value });
      }
    });
  }
}
