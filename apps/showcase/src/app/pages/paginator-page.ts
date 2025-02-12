import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScButton,
  ScCard,
  ScCardContent,
  ScCodeHighlighter,
  ScHeading,
  ScPageDescription,
  ScPageEvent,
  ScPageSizeSelect,
  ScPageSubtitle,
  ScPageTitle,
  ScPagination,
  ScPaginationEllipsis,
  ScPaginationFirst,
  ScPaginationLast,
  ScPaginationLink,
  ScPaginationList,
  ScPaginationNext,
  ScPaginationPrevious,
  ScPaginator,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiChevronsLeftIcon,
  SiChevronsRightIcon,
  SiEllipsisIcon,
  SiLoaderCircleIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-paginator-page',
  imports: [
    ScPaginator,
    ScPagination,
    ScPageSizeSelect,
    SiChevronLeftIcon,
    SiChevronsLeftIcon,
    SiChevronRightIcon,
    SiChevronsRightIcon,
    ScPaginationFirst,
    ScPaginationPrevious,
    ScPaginationLast,
    ScPaginationNext,
    ScPaginationLink,
    SiEllipsisIcon,
    ScPaginationEllipsis,
    ScPaginationList,
    ScButton,
    SiChevronRightIcon,
    SiLoaderCircleIcon,
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    ScPageTitle,
    ScPageSubtitle,
    ScPageDescription,
    ScTabs,
    ScTab,
    ScTabLabel,
    ScTabContent,
    ScCard,
    ScHeading,
    ScCodeHighlighter,
    ScCardContent,
    RouterLink,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Pagination</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Pagination</h1>

        <p sc-page-description>Pagination with page navigation, next and previous links.</p>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="codeSnippet1" language="typescript" />

        <sc-code-highlighter class="mt-2" [code]="codeSnippet2" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="variants">
          <h3 class="mb-2" sc-heading level="3">Pagination first variant</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <div
                      #pp="scPaginator"
                      [currentPage]="currentPage()"
                      [pageSize]="pageSize()"
                      [totalSize]="totalSize()"
                      (pageChanged)="setPageEvent($event)"
                      paginationActiveLinkVariant="outline"
                      paginationLinkVariant="ghost"
                      sc-paginator
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

                          @for (page of pp.pageRanges(); track $index) {
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
                    </div>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <sc-code-highlighter [code]="codeSnippet" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <section class="my-10" id="small-buttons">
          <h3 class="mb-2" sc-heading level="3">Pagination second variant</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <div
                      #p="scPaginator"
                      [currentPage]="currentPage()"
                      [pageSize]="pageSize()"
                      [totalSize]="totalSize()"
                      (pageChanged)="setPageEvent($event)"
                      paginationActiveLinkVariant="secondary"
                      paginationLinkVariant="outline"
                      sc-paginator
                    >
                      <nav class="" sc-pagination>
                        <ul sc-pagination-list>
                          <li>
                            <a sc-pagination-first size="icon">
                              <svg si-chevrons-left-icon></svg>
                              <span class="sr-only">First page</span>
                            </a>
                          </li>

                          <li>
                            <a sc-pagination-previous size="icon">
                              <svg si-chevron-left-icon></svg>
                              <span class="sr-only">Previous page</span>
                            </a>
                          </li>

                          @for (page of p.pageRanges(); track $index) {
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
                            <a sc-pagination-next size="icon">
                              <svg si-chevron-right-icon></svg>
                              <span class="sr-only">Next page</span>
                            </a>
                          </li>

                          <li>
                            <a sc-pagination-last size="icon">
                              <svg si-chevrons-right-icon></svg>
                              <span class="sr-only">Last page</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <p>Coming soon</p>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <section class="my-10" id="large-buttons">
          <h3 class="mb-2" sc-heading level="3">Items per page</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <div
                      class="flex justify-between"
                      #p="scPaginator"
                      [currentPage]="currentPage()"
                      [pageSize]="pageSize()"
                      [totalSize]="totalSize()"
                      (pageChanged)="setPageEvent($event)"
                      paginationActiveLinkVariant="secondary"
                      paginationLinkVariant="outline"
                      sc-paginator
                    >
                      <div class="flex items-center space-x-2">
                        <p class="text-sm font-medium">Items per page :</p>
                        <div sc-page-size-select></div>
                      </div>

                      <nav class="" sc-pagination>
                        <ul sc-pagination-list>
                          <li>
                            <a sc-pagination-first size="icon">
                              <svg si-chevrons-left-icon></svg>
                              <span class="sr-only">First page</span>
                            </a>
                          </li>

                          <li>
                            <a sc-pagination-previous size="icon">
                              <svg si-chevron-left-icon></svg>
                              <span class="sr-only">Previous page</span>
                            </a>
                          </li>

                          @for (page of p.pageRanges(); track $index) {
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
                            <a sc-pagination-next size="icon">
                              <svg si-chevron-right-icon></svg>
                              <span class="sr-only">Next page</span>
                            </a>
                          </li>

                          <li>
                            <a sc-pagination-last size="icon">
                              <svg si-chevrons-right-icon></svg>
                              <span class="sr-only">Last page</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <p>Coming soon</p>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <section class="my-10" id="buttons-with-icons">
          <h3 class="mb-2" sc-heading level="3">Pagination infos</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center" sc-card-content>
                    <div
                      #pag="scPaginator"
                      [currentPage]="currentPage()"
                      [pageSize]="pageSize()"
                      [totalSize]="totalSize()"
                      (pageChanged)="setPageEvent($event)"
                      paginationActiveLinkVariant="secondary"
                      paginationLinkVariant="outline"
                      sc-paginator
                    >
                      <div class="flex w-full items-center justify-center text-sm font-medium">
                        Showing
                        {{ pag.firstItemPage() }}-{{ pag.lastItemPage() }}
                        of
                        {{ pag.totalSize() }}
                      </div>
                    </div>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <p>Coming soon</p>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>
      </div>

      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <!--li class="mt-0 pt-2">
                  <a
                    class="inline-block font-medium text-foreground no-underline transition-colors hover:text-foreground"
                    href="#installation"
                  >
                    Installation
                  </a>
                </li-->
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="usage"
                  >
                    Usage
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="examples"
                  >
                    Examples
                  </a>
                  <ul class="m-0 list-none pl-4">
                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="variants"
                      >
                        Variants
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="small-buttons"
                      >
                        Small buttons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="large-buttons"
                      >
                        Large buttons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="disabled-buttons"
                      >
                        Disabled buttons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="buttons-with-icons"
                      >
                        Buttons with icons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="button-with-loading-state"
                      >
                        Button with loading state
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
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

  class = signal<string>('block w-full');

  codeSnippet1 = `import { ScButton } from '@semantic-components/ui';`;

  codeSnippet2 = `<button sc-button type="button">Primary</button>`;

  codeSnippet = `<button sc-button type="button">Primary</button>
  <button sc-button variant="secondary" type="button">Secondary</button>
  <button sc-button variant="destructive" type="button">Destructive</button>
  <button sc-button variant="outline" type="button">Outline</button>
  <button sc-button variant="ghost" type="button">Ghost</button>
  <button sc-button variant="link" type="button">Link</button>`;

  d = signal(true);

  f() {
    this.d.update((v) => !v);
  }
}
