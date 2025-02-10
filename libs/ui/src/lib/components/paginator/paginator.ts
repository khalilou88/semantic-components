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
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '@semantic-components/utils';

import { ScOption, ScSelect } from '../select';
import { ScPageEvent } from './page-event';
import { ScPagination } from './pagination';
import { DEFAULT_PAGE_SIZE, PaginatorService } from './paginator.service';

@Component({
  selector: 'sc-paginator',
  exportAs: 'scPaginator',
  imports: [ReactiveFormsModule, ScPagination, ScSelect, ScOption],
  template: `
    <ng-content />

    <div>
      <label class="" for="items-per-page">Items per page:</label>
      <sc-select class="inline-block" id="items-per-page" [formControl]="pageSizeFormControl">
        @for (pageSizeOption of pageSizeOptions(); track $index) {
          <sc-option [value]="pageSizeOption">{{ pageSizeOption }}</sc-option>
        }
      </sc-select>
    </div>

    <nav class="col-span-2" [showFirstLastLinks]="showFirstLastLinks()" sc-pagination></nav>
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
  private readonly paginatorService = inject(PaginatorService);

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
