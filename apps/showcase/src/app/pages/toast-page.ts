import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  signal,
  viewChild,
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
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
  ScToast,
  ScToastAction,
  ScToastClose,
  ScToastContent,
  ScToastDescription,
  ScToastTitle,
  Toaster,
} from '@semantic-components/ui';
import { SiChevronRightIcon, SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-toast-page',
  imports: [
    ScToastClose,
    SiXIcon,
    ScToastAction,
    ScToastDescription,
    ScToastTitle,
    ScToast,
    ScToastContent,
    ScButton,
    ScButton,
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
              <span sc-breadcrumb-page>Toast</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Toast</h1>

        <p sc-page-description>A succinct message that is displayed temporarily.</p>

        <section class="my-10" id="">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button (click)="showToast()" variant="outline" sc-button type="button">
                      Add to calendar
                    </button>
                  </div>
                </div>

                <ng-template #toastTemplate>
                  <div sc-toast>
                    <div sc-toast-content>
                      <h2 sc-toast-title>Scheduled: Catch up</h2>
                      <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
                    </div>
                    <button sc-toast-action type="button">Undo</button>
                    <button type="button" sc-toast-close>
                      <svg class="size-4" si-x-icon></svg>
                      <span class="sr-only">Close</span>
                    </button>
                  </div>
                </ng-template>
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

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="typescript" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="simple">
          <h3 class="mb-2" sc-heading level="3">Simple</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button (click)="showSimpleToast()" sc-button type="button" variant="outline">
                      Show Simple Toast
                    </button>

                    <ng-template #simpleToastTemplate>
                      <div sc-toast>
                        <div sc-toast-content>
                          <p sc-toast-description>Your message has been sent.</p>
                        </div>
                      </div>
                    </ng-template>
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

        <section class="my-10" id="with-title">
          <h3 class="mb-2" sc-heading level="3">With title</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button
                      (click)="showToastWithTitle()"
                      sc-button
                      type="button"
                      variant="outline"
                    >
                      Show Toast
                    </button>

                    <ng-template #toastWithTitleTemplate>
                      <div sc-toast>
                        <div sc-toast-content>
                          <h2 sc-toast-title>Uh oh! Something went wrong.</h2>
                          <p sc-toast-description>There was a problem with your request.</p>
                        </div>
                      </div>
                    </ng-template>
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

        <section class="my-10" id="with-action">
          <h3 class="mb-2" sc-heading level="3">With Action</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button
                      (click)="showToastWithAction()"
                      sc-button
                      type="button"
                      variant="outline"
                    >
                      Show Toast
                    </button>

                    <ng-template #toastWithActionTemplate>
                      <div sc-toast>
                        <div sc-toast-content>
                          <h2 sc-toast-title>Uh oh! Something went wrong.</h2>
                          <p sc-toast-description>There was a problem with your request.</p>
                        </div>
                        <button sc-toast-action type="button">Try again</button>
                        <button type="button" sc-toast-close>
                          <svg class="size-4" si-x-icon></svg>
                          <span class="sr-only">Close 4</span>
                        </button>
                      </div>
                    </ng-template>
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

        <section class="my-10" id="destructive">
          <h3 class="mb-2" sc-heading level="3">Destructive</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button
                      (click)="showDestructiveToast()"
                      sc-button
                      type="button"
                      variant="outline"
                    >
                      Show Toast
                    </button>

                    <ng-template #destructiveToastTemplate>
                      <div sc-toast variant="destructive">
                        <div sc-toast-content>
                          <h2 sc-toast-title>Uh oh! Something went wrong.</h2>
                          <p sc-toast-description>There was a problem with your request.</p>
                        </div>
                        <button sc-toast-action type="button">Try again</button>
                        <button type="button" sc-toast-close>
                          <svg class="size-4" si-x-icon></svg>
                          <span class="sr-only">Close 4</span>
                        </button>
                      </div>
                    </ng-template>
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
                        fragment="simple"
                      >
                        Simple
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="with-title"
                      >
                        With title
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="with-action"
                      >
                        With Action
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="destructive"
                      >
                        Destructive
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
export default class ToastPage {
  private readonly toaster = inject(Toaster);

  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');
  private readonly simpleToastTemplate =
    viewChild.required<TemplateRef<unknown>>('simpleToastTemplate');
  private readonly toastWithTitleTemplate =
    viewChild.required<TemplateRef<unknown>>('toastWithTitleTemplate');
  private readonly toastWithActionTemplate =
    viewChild.required<TemplateRef<unknown>>('toastWithActionTemplate');
  private readonly destructiveToastTemplate = viewChild.required<TemplateRef<unknown>>(
    'destructiveToastTemplate',
  );

  protected showToast() {
    this.toaster.show(this.toastTemplate());
  }

  protected showSimpleToast() {
    this.toaster.show(this.simpleToastTemplate());
  }

  protected showToastWithTitle() {
    this.toaster.show(this.toastWithTitleTemplate());
  }

  protected showToastWithAction() {
    this.toaster.show(this.toastWithActionTemplate());
  }

  protected showDestructiveToast() {
    this.toaster.show(this.destructiveToastTemplate());
  }

  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScToast,
  ScToastAction,
  ScToastClose,
  ScToastContent,
  ScToastDescription,
  ScToastTitle,
  Toaster,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<button (click)="showToast()" variant="outline" sc-button type="button">
      Add to calendar
</button>

<ng-template #toastTemplate>
  <div sc-toast>
    <div sc-toast-content>
      <h2 sc-toast-title>Scheduled: Catch up</h2>
      <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
    </div>
    <button sc-toast-action type="button">Undo</button>
    <button type="button" sc-toast-close>
      <svg class="size-4" si-x-icon></svg>
      <span class="sr-only">Close</span>
    </button>
  </div>
</ng-template>`;
}
