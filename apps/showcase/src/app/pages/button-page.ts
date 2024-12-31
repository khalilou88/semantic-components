import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScButton,
  ScCard,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import { SvgChevronRightIcon, SvgLoaderCircleIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-buttons-page',
  imports: [
    ScButton,
    SvgChevronRightIcon,
    SvgLoaderCircleIcon,
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    SvgChevronRightIcon,
    ScPageTitle,
    ScPageSubtitle,
    ScPageDescription,
    ScTabs,
    ScTab,
    ScTabLabel,
    ScTabContent,
    ScCard,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div class="mx-auto w-full min-w-0 max-w-2xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg-chevron-right-icon /></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Button</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Button</h1>

        <p sc-page-description>Displays a button or a link that looks like a button.</p>

        <h2 sc-page-subtitle>Usage</h2>

        <h2 class="mb-5" sc-page-subtitle>Examples</h2>

        <sc-tabs class="w-[400px]" labelsHostClass="grid w-full grid-cols-2">
          <sc-tab>
            <sc-tab-label>Preview</sc-tab-label>
            <sc-tab-content>
              <div sc-card>
                <div class="m-10 flex gap-2" sc-card-content>
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
              <div sc-card>
                <div class="m-10 flex gap-2" sc-card-content>
                  <p>Coming soon</p>
                </div>
              </div>
            </sc-tab-content>
          </sc-tab>
        </sc-tabs>

        <h1>Sm</h1>
        <button sc-button type="button" size="sm">Primary</button>
        <button sc-button variant="secondary" type="button" size="sm">Secondary</button>
        <button sc-button variant="destructive" type="button" size="sm">Destructive</button>
        <button sc-button variant="outline" type="button" size="sm">Outline</button>
        <button sc-button variant="ghost" type="button" size="sm">Ghost</button>
        <button sc-button variant="link" type="button" size="sm">Link</button>

        <h1>Lg</h1>
        <button sc-button type="button" size="lg">Primary</button>
        <button sc-button variant="secondary" type="button" size="lg">Secondary</button>
        <button sc-button variant="destructive" type="button" size="lg">Destructive</button>
        <button sc-button variant="outline" type="button" size="lg">Outline</button>
        <button sc-button variant="ghost" type="button" size="lg">Ghost</button>
        <button sc-button variant="link" type="button" size="lg">Link</button>

        <h1>Disabled</h1>
        <button sc-button type="button" disabled>Primary</button>
        <button sc-button variant="secondary" type="button" disabled>Secondary</button>
        <button sc-button variant="destructive" type="button" disabled>Destructive</button>
        <button sc-button variant="outline" type="button" disabled>Outline</button>
        <button sc-button variant="ghost" type="button" disabled>Ghost</button>
        <button sc-button variant="link" type="button" disabled>Link</button>

        <h1>Disabled Links</h1>
        <a sc-button type="button" disabled>Primary</a>
        <a sc-button variant="secondary" type="button" disabled>Secondary</a>
        <a sc-button variant="destructive" type="button" disabled>Destructive</a>
        <a sc-button variant="outline" type="button" disabled>Outline</a>
        <a sc-button variant="ghost" type="button" disabled>Ghost</a>
        <a sc-button variant="link" type="button" disabled>Link</a>

        <h1>Icon</h1>
        <button sc-button type="button" size="icon">
          <svg-chevron-right-icon />
        </button>
        <button sc-button variant="secondary" type="button" size="icon">
          <svg-chevron-right-icon />
        </button>
        <button sc-button variant="destructive" type="button" size="icon">
          <svg-chevron-right-icon />
        </button>
        <button class="size-20" sc-button variant="outline" type="button" size="icon">
          <svg-chevron-right-icon />
        </button>
        <button sc-button variant="ghost" type="button" size="icon">
          <svg-chevron-right-icon />
        </button>
        <button sc-button variant="link" type="button" size="icon">
          <svg-chevron-right-icon />
        </button>

        <br />
        <br />
        <br />

        <button sc-button disabled>
          <svg-loader-circle-icon class="animate-spin" />
          Please wait
        </button>
      </div>

      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block font-medium text-foreground no-underline transition-colors hover:text-foreground"
                    href="#installation"
                  >
                    Installation
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    href="#usage"
                  >
                    Usage
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    href="#examples"
                  >
                    Examples
                  </a>
                  <ul class="m-0 list-none pl-4">
                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        href="#horizontal-scrolling"
                      >
                        Horizontal Scrolling
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
export default class ButtonPage {
  class = signal<string>('block w-full');
}
