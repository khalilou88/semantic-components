import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import {
  ScPageEvent,
  ScPageSizeSelect,
  ScPaginator,
  ScPaginatorContainer,
} from '@semantic-components/ui';

@Component({
  selector: 'app-paginator-page',
  imports: [ScPaginator, ScPageSizeSelect, ScPaginatorContainer],
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

          <sc-page-size-select />

          <div class="">
            Showing
            <span>{{ p.firstItemPage() }}-{{ p.lastItemPage() }}</span>
            of
            <span>{{ p.totalSize() }}</span>
          </div>
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
