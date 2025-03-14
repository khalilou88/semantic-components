import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';
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
  ScPageSubtitle,
  ScPageTitle,
  ScScrollToTop,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import { SiChevronRightIcon, SiLoaderCircleIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-button-page',
  imports: [
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
              <span sc-breadcrumb-page>Button</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Button</h1>

        <p sc-page-description>Displays a button that looks like a button or a link.</p>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="typescript" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="variants">
          <h3 class="mb-2" sc-heading level="3">Variants</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button sc-button type="button">Primary</button>
                    <button sc-button variant="secondary" type="button">Secondary</button>
                    <button sc-button variant="destructive" type="button">Destructive</button>
                    <button sc-button variant="outline" type="button">Outline</button>
                    <button sc-button variant="ghost" type="button">Ghost</button>
                    <button sc-button variant="link" type="button">Link</button>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <sc-code-highlighter [code]="templateCodeSnippet" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <section class="my-10" id="small-buttons">
          <h3 class="mb-2" sc-heading level="3">Small buttons</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button sc-button type="button" size="sm">Primary</button>
                    <button sc-button variant="secondary" type="button" size="sm">Secondary</button>
                    <button sc-button variant="destructive" type="button" size="sm">
                      Destructive
                    </button>
                    <button sc-button variant="outline" type="button" size="sm">Outline</button>
                    <button sc-button variant="ghost" type="button" size="sm">Ghost</button>
                    <button sc-button variant="link" type="button" size="sm">Link</button>
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
          <h3 class="mb-2" sc-heading level="3">Large buttons</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button sc-button type="button" size="lg">Primary</button>
                    <button sc-button variant="secondary" type="button" size="lg">Secondary</button>
                    <button sc-button variant="destructive" type="button" size="lg">
                      Destructive
                    </button>
                    <button sc-button variant="outline" type="button" size="lg">Outline</button>
                    <button sc-button variant="ghost" type="button" size="lg">Ghost</button>
                    <button sc-button variant="link" type="button" size="lg">Link</button>
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

        <section class="my-10" id="disabled-buttons">
          <h3 class="mb-2" sc-heading level="3">Disabled buttons</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button [disabled]="'true'" sc-button type="button">Primary</button>
                    <button sc-button variant="secondary" type="button" disabled>Secondary</button>
                    <button sc-button variant="destructive" type="button" disabled>
                      Destructive
                    </button>
                    <button sc-button variant="outline" type="button" disabled>Outline</button>
                    <button sc-button variant="ghost" type="button" disabled>Ghost</button>
                    <button sc-button variant="link" type="button" disabled>Link</button>
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
          <h3 class="mb-2" sc-heading level="3">Buttons with icons</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button sc-button type="button" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </button>
                    <button sc-button variant="secondary" type="button" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </button>
                    <button sc-button variant="destructive" type="button" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </button>
                    <button class="size-20" sc-button variant="outline" type="button" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </button>
                    <button sc-button variant="ghost" type="button" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </button>
                    <button sc-button variant="link" type="button" size="icon">
                      <svg si-chevron-right-icon></svg>
                    </button>
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

        <section class="my-10" id="button-with-loading-state">
          <h3 class="mb-2" sc-heading level="3">Button with loading state</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button sc-button disabled>
                      <svg class="animate-spin" si-loader-circle-icon></svg>
                      Please wait
                    </button>
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
export default class ButtonPage implements OnInit {
  constructor(private readonly scrollToTop: ScScrollToTop) {}

  ngOnInit() {
    this.scrollToTop.init();
  }

  class = signal<string>('block w-full');

  importCodeSnippet = `import { ScButton } from '@semantic-components/ui';`;

  templateCodeSnippet = `<button sc-button type="button">Primary</button>
<button sc-button variant="secondary" type="button">Secondary</button>
<button sc-button variant="destructive" type="button">Destructive</button>
<button sc-button variant="outline" type="button">Outline</button>
<button sc-button variant="ghost" type="button">Ghost</button>
<button sc-button variant="link" type="button">Link</button>`;
}
