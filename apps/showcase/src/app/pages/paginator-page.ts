import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { ScPageEvent, ScPaginator } from '@semantic-components/ui';

@Component({
  selector: 'app-paginator-page',
  imports: [ScPaginator],
  template: `
    <div class="m-10">
      <sc-paginator
        [hidePageSize]="false"
        [showFirstLastButtons]="true"
        [currentPage]="currentPage()"
        [pageSize]="pageSize()"
        [totalSize]="totalSize()"
        (pageChanged)="setPageEvent($event)"
      />
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
