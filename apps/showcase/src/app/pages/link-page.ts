import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScCodeHighlighter } from '@semantic-components/code-highlighter';
import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/experimental';
import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScCard,
  ScCardContent,
  ScHeading,
  ScLink,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
} from '@semantic-components/ui';
import { SiChevronRightIcon, SiLoaderCircleIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-link-page',
  imports: [
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
    ScLink,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Link</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Link</h1>

        <p sc-page-description>Displays a link that looks like a link or a button.</p>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="codeSnippet1" language="angular-ts" />

        <sc-code-highlighter class="mt-2" [code]="codeSnippet2" language="angular-html" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="variants">
          <h3 class="mb-2" sc-heading level="3">Variants</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <a sc-link variant="primary">Primary</a>
                    <a sc-link variant="secondary">Secondary</a>
                    <a sc-link variant="destructive">Destructive</a>
                    <a sc-link variant="outline">Outline</a>
                    <a sc-link variant="ghost">Ghost</a>
                    <a sc-link variant="link">Link</a>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <sc-code-highlighter [code]="codeSnippet" language="angular-html" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <section class="my-10" id="small-links">
          <h3 class="mb-2" sc-heading level="3">Small links</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <a sc-link variant="primary" size="sm">Primary</a>
                    <a sc-link variant="secondary" size="sm">Secondary</a>
                    <a sc-link variant="destructive" size="sm">Destructive</a>
                    <a sc-link variant="outline" size="sm">Outline</a>
                    <a sc-link variant="ghost" size="sm">Ghost</a>
                    <a sc-link variant="link" size="sm">Link</a>
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

        <section class="my-10" id="large-links">
          <h3 class="mb-2" sc-heading level="3">Large links</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <a sc-link variant="primary" size="lg">Primary</a>
                    <a sc-link variant="secondary" size="lg">Secondary</a>
                    <a sc-link variant="destructive" size="lg">Destructive</a>
                    <a sc-link variant="outline" size="lg">Outline</a>
                    <a sc-link variant="ghost" size="lg">Ghost</a>
                    <a sc-link variant="link" size="lg">Link</a>
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

        <section class="my-10" id="disabled-links">
          <h3 class="mb-2" sc-heading level="3">Disabled links</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <a [disabled]="'true'" variant="primary" sc-link>Primary</a>
                    <a sc-link variant="secondary" disabled>Secondary</a>
                    <a sc-link variant="destructive" disabled>Destructive</a>
                    <a sc-link variant="outline" disabled>Outline</a>
                    <a sc-link variant="ghost" disabled>Ghost</a>
                    <a sc-link variant="link" disabled>Link</a>
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

        <section class="my-10" id="links-with-icons">
          <h3 class="mb-2" sc-heading level="3">Links with icons</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center" sc-card-content>
                    <a sc-link variant="primary" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </a>
                    <a sc-link variant="secondary" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </a>
                    <a sc-link variant="destructive" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </a>
                    <a class="size-20" sc-link variant="outline" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </a>
                    <a sc-link variant="ghost" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </a>
                    <a sc-link variant="link" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </a>
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

        <section class="my-10" id="link-with-loading-state">
          <h3 class="mb-2" sc-heading level="3">Link with loading state</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <a sc-link disabled>
                      <svg class="animate-spin" si-loader-circle-icon></svg>
                      Please wait
                    </a>
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
                        fragment="small-links"
                      >
                        Small links
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="large-links"
                      >
                        Large links
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="disabled-links"
                      >
                        Disabled links
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="links-with-icons"
                      >
                        Links with icons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="link-with-loading-state"
                      >
                        Link with loading state
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
export default class LinkPage {
  class = signal<string>('block w-full');

  codeSnippet1 = `import { ScLink } from '@semantic-components/ui';`;

  codeSnippet2 = `<a sc-link>Primary</a>`;

  codeSnippet = `<a sc-link variant="primary">Primary</a>
<a sc-link variant="secondary">Secondary</a>
<a sc-link variant="destructive">Destructive</a>
<a sc-link variant="outline">Outline</a>
<a sc-link variant="ghost">Ghost</a>
<a sc-link variant="link">Link</a>`;
}
