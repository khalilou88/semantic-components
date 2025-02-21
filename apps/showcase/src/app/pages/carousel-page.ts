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
  ScCarousel,
  ScCarouselItem,
  ScCarouselItems,
  ScCarouselNext,
  ScCarouselPrevious,
  ScCarouselViewport,
  ScCodeHighlighter,
  ScHeading,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import {
  SiArrowLeftIcon,
  SiArrowRightIcon,
  SiChevronRightIcon,
} from '@semantic-icons/lucide-icons';
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-carousel-page',
  imports: [
    ScCarousel,
    ScCarouselViewport,
    ScCarouselItems,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
    SiArrowLeftIcon,
    SiArrowRightIcon,
    ScCard,
    ScCardContent,
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
              <span sc-breadcrumb-page>Carousel</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Carousel</h1>

        <p sc-page-description>A carousel with motion and swipe built using Embla.</p>

        <section class="my-10" id="variants">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div
                      class="w-full max-w-xs"
                      [plugins]="plugins"
                      [plugins]="plugins"
                      sc-carousel
                    >
                      <div sc-carousel-viewport>
                        <div sc-carousel-items>
                          @for (item of items; track $index) {
                            <div sc-carousel-item>
                              <div class="p-1">
                                <div sc-card>
                                  <div
                                    class="flex aspect-square items-center justify-center p-6"
                                    sc-card-content
                                  >
                                    <span class="text-4xl font-semibold">{{ item }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      </div>

                      <button sc-carousel-previous>
                        <svg class="size-4" si-arrow-left-icon></svg>
                        <span class="sr-only">Previous slide</span>
                      </button>
                      <button sc-carousel-next>
                        <svg class="size-4" si-arrow-right-icon></svg>
                        <span class="sr-only">Next slide</span>
                      </button>
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

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="codeSnippet1" language="typescript" />

        <sc-code-highlighter class="mt-2" [code]="codeSnippet2" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="sizes">
          <h3 class="mb-2" sc-heading level="3">Sizes</h3>
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div [plugins]="plugins" [plugins]="plugins" sc-carousel>
                      <div sc-carousel-items>
                        @for (item of items; track $index) {
                          <div class="md:basis-1/2 lg:basis-1/3" sc-carousel-item>
                            <div class="p-1">
                              <div sc-card>
                                <div
                                  class="flex aspect-square items-center justify-center p-6"
                                  sc-card-content
                                >
                                  <span class="text-4xl font-semibold">{{ item }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </div>

                      <button sc-carousel-previous variant="secondary" size="icon">
                        <svg class="size-4" si-arrow-left-icon></svg>
                      </button>
                      <button sc-carousel-next variant="secondary" size="icon">
                        <svg class="size-4" si-arrow-right-icon></svg>
                      </button>
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

        <section class="my-10" id="spacing">
          <h3 class="mb-2" sc-heading level="3">Orientation</h3>
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div
                      class="h-[200px]"
                      [plugins]="plugins"
                      [plugins]="plugins"
                      sc-carousel
                      orientation="vertical"
                    >
                      <div sc-carousel-items>
                        @for (item of items; track $index) {
                          <div class="pt-1 md:basis-1/2" sc-carousel-item>
                            <div class="p-1">
                              <div sc-card>
                                <div
                                  class="flex aspect-square items-center justify-center p-6"
                                  sc-card-content
                                >
                                  <span class="text-4xl font-semibold">{{ item }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </div>

                      <button sc-carousel-previous variant="secondary" size="icon">
                        <svg class="size-4" si-arrow-left-icon></svg>
                      </button>
                      <button sc-carousel-next variant="secondary" size="icon">
                        <svg class="size-4" si-arrow-right-icon></svg>
                      </button>
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
export default class CarouselPage {
  items = Array.from({ length: 5 }, (_, i) => i + 1);

  options: EmblaOptionsType = { loop: false };

  plugins: EmblaPluginType[] = [Autoplay()];

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
