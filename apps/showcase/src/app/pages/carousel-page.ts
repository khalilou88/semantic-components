import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  ScCarousel,
  ScCarouselContainer,
  ScCarouselItem,
  ScCarouselItems,
  ScCarouselNext,
  ScCarouselPrevious,
  ScCodeHighlighter,
  ScHeading,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
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
    ScCarouselContainer,
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

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div class="w-full max-w-xs" sc-carousel-container>
                      <div class="w-full" [options]="options" [plugins]="plugins" sc-carousel>
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

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="sizes">
          <h3 class="mb-2" sc-heading level="3">Sizes</h3>
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div class="w-full max-w-xs" sc-carousel-container>
                      <div class="w-full" sc-carousel>
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

        <section class="my-10" id="orientation">
          <h3 class="mb-2" sc-heading level="3">Orientation</h3>
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto min-h-[350px]" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div class="w-full max-w-xs mt-10" sc-carousel-container>
                      <div
                        class="w-full"
                        [options]="orientationOptions"
                        orientation="vertical"
                        sc-carousel
                      >
                        <div class="-mt-1 h-[200px]" sc-carousel-items>
                          @for (item of items; track $index) {
                            <div class="pt-1 md:basis-1/2" sc-carousel-item>
                              <div class="p-1">
                                <div sc-card>
                                  <div class="flex items-center justify-center p-6" sc-card-content>
                                    <span class="text-4xl font-semibold">{{ item }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
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
                        fragment="sizes"
                      >
                        Sizes
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="orientation"
                      >
                        Orientation
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

  orientationOptions: EmblaOptionsType = { align: 'start' };

  plugins: EmblaPluginType[] = [Autoplay()];

  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScCarousel,
  ScCarouselContainer,
  ScCarouselItem,
  ScCarouselItems,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<div class="w-full max-w-xs" sc-carousel-container>
  <div class="w-full" sc-carousel>
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

    <button sc-carousel-previous>
      <svg class="size-4" si-arrow-left-icon></svg>
      <span class="sr-only">Previous slide</span>
    </button>
    <button sc-carousel-next>
      <svg class="size-4" si-arrow-right-icon></svg>
      <span class="sr-only">Next slide</span>
    </button>
  </div>
</div>`;
}
