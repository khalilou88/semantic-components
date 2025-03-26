import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { SkeletonDemo } from './skeleton-demo';

@Component({
  selector: 'app-skeleton-demo-section',
  imports: [SkeletonDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-skeleton-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import {
  ScPageEvent,
  ScPagination,
  ScPaginationEllipsis,
  ScPaginationLink,
  ScPaginationList,
  ScPaginationNext,
  ScPaginationPrevious,
  ScPaginator,
} from '@semantic-components/ui';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiEllipsisIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-pagination-demo',
  imports: [
    ScPaginator,
    ScPagination,
    SiChevronLeftIcon,
    SiChevronRightIcon,
    ScPaginationPrevious,
    ScPaginationNext,
    ScPaginationLink,
    SiEllipsisIcon,
    ScPaginationEllipsis,
    ScPaginationList,
    SiChevronRightIcon,
  ],
  template: \`
    <sc-paginator
      #paginator="scPaginator"
      [currentPage]="currentPage()"
      [pageSize]="pageSize()"
      [totalSize]="totalSize()"
      (pageChanged)="setPageEvent($event)"
      paginationActiveLinkVariant="outline"
      paginationLinkVariant="ghost"
    >
      <nav sc-pagination>
        <ul sc-pagination-list>
          <li>
            <a sc-pagination-previous>
              <svg si-chevron-left-icon></svg>
              <span>Previous</span>
              <span class="sr-only">Previous page</span>
            </a>
          </li>

          @for (page of paginator.pages(); track $index) {
            <li>
              @if (page === '...') {
                <span sc-pagination-ellipsis>
                  <svg class="size-4" si-ellipsis-icon></svg>
                  <span class="sr-only">More pages</span>
                </span>
              } @else {
                <a [page]="page" sc-pagination-link>
                  {{ page }}
                </a>
              }
            </li>
          }

          <li>
            <a sc-pagination-next>
              <span>Next</span>
              <svg si-chevron-right-icon></svg>
              <span class="sr-only">Next page</span>
            </a>
          </li>
        </ul>
      </nav>
    </sc-paginator>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationDemo {
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalSize = signal<number>(65);

  setPageEvent(pageEvent: ScPageEvent) {
    this.currentPage.set(pageEvent.page);
    this.pageSize.set(pageEvent.pageSize);
  }
}`;
}
