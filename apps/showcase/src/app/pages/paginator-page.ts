import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { ScPageEvent, ScPaginator } from '@semantic-components/ui';

@Component({
  selector: 'app-paginator-page',
  imports: [ScPaginator],
  template: `
    <sc-paginator
      [currentPage]="currentPage()"
      [pageSize]="pageSize()"
      [totalItems]="totalItems()"
      (pageChanged)="setPageEvent($event)"
      aria-label="Select page"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginatorPage {
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalItems = signal<number>(65);

  setPageEvent(pageEvent: ScPageEvent) {
    this.currentPage.set(pageEvent.page);
    this.pageSize.set(pageEvent.pageSize);
  }
}
