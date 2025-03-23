import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScCard,
  ScCardContent,
  ScCodeHighlighter,
  ScContextMenuTriggerFor,
  ScMenu,
  ScMenuItem,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-context-menu-page',
  imports: [
    ScContextMenuTriggerFor,
    ScMenu,
    ScMenuItem,
    SiChevronRightIcon,
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
              <span sc-breadcrumb-page>Context Menu</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Context Menu</h1>

        <p sc-page-description>
          Displays a menu to the user — such as a set of actions or functions — triggered by a Right
          click.
        </p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div
                      class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
                      [scContextMenuTriggerFor]="context_menu"
                    >
                      Right click here
                    </div>

                    <ng-template #context_menu>
                      <div sc-menu>
                        <button sc-menu-item>Cut</button>
                        <button sc-menu-item>Copy</button>
                        <button sc-menu-item>Link</button>
                      </div>
                    </ng-template>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <sc-code-highlighter [code]="templateCodeSnippet" language="angular-html" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="angular-ts" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" language="angular-html" />
      </div>

      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="usage"
                  >
                    Usage
                  </a>
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
export default class ContextMenuPage {
  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScContextMenuTriggerFor,
  ScMenu,
  ScMenuItem,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<div
    class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
    [scContextMenuTriggerFor]="context_menu"
  >
    Right click here
  </div>

  <ng-template #context_menu>
    <div sc-menu>
      <button sc-menu-item>Cut</button>
      <button sc-menu-item>Copy</button>
      <button sc-menu-item>Link</button>
    </div>
  </ng-template>
</div>`;
}
