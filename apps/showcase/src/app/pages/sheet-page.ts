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
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScCodeHighlighter,
  ScInput,
  ScLabel,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScSheet,
  ScSheetClose,
  ScSheetConfig,
  ScSheetTrigger,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import { SiChevronRightIcon, SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-sheet-page',
  imports: [
    ScButton,
    ScSheet,
    ScCardHeader,
    ScCardFooter,
    ScInput,
    ScLabel,
    ScCardTitle,
    ScCardDescription,
    ScSheetClose,
    SiXIcon,
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
              <span sc-breadcrumb-page>Sheet</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Sheet</h1>

        <p sc-page-description>
          Extends the Dialog component to display content that complements the main content of the
          screen.
        </p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div class="grid grid-cols-2 gap-2">
                      @for (side of SHEET_SIDES; track $index) {
                        <button (click)="openSheet(side)" sc-button variant="outline">
                          {{ side }}
                        </button>
                      }
                    </div>

                    <ng-template #sheet>
                      <div sc-sheet>
                        <button sc-sheet-close>
                          <svg class="size-4" si-x-icon></svg>
                          <span class="sr-only">Close</span>
                        </button>

                        <div sc-card-header>
                          <h2 sc-card-title>Edit profile</h2>
                          <p sc-card-description>
                            Make changes to your profile here. Click save when you're done.
                          </p>
                        </div>
                        <div class="grid gap-4 py-4">
                          <div class="grid grid-cols-4 items-center gap-4">
                            <label class="text-right" sc-label for="name">Name</label>
                            <input class="col-span-3" id="name" sc-input value="Pedro Duarte" />
                          </div>
                          <div class="grid grid-cols-4 items-center gap-4">
                            <label class="text-right" sc-label for="username">Username</label>
                            <input class="col-span-3" id="username" sc-input value="@peduarte" />
                          </div>
                        </div>
                        <div sc-card-footer>
                          <button sc-button type="submit">Save changes</button>
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
                <sc-code-highlighter [code]="templateCodeSnippet" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="typescript" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" />
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
export default class SheetPage {
  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScSheet,
  ScSheetClose,
  ScSheetConfig,
  ScSheetTrigger,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<div class="grid grid-cols-2 gap-2">
  @for (side of SHEET_SIDES; track $index) {
    <button (click)="openSheet(side)" sc-button variant="outline">
      {{ side }}
    </button>
  }
</div>

<ng-template #sheet>
  <div sc-sheet>
    <button sc-sheet-close>
      <svg class="size-4" si-x-icon></svg>
      <span class="sr-only">Close</span>
    </button>

    <div sc-card-header>
      <h2 sc-card-title>Edit profile</h2>
      <p sc-card-description>
        Make changes to your profile here. Click save when you're done.
      </p>
    </div>
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label class="text-right" sc-label for="name">Name</label>
        <input class="col-span-3" id="name" sc-input value="Pedro Duarte" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label class="text-right" sc-label for="username">Username</label>
        <input class="col-span-3" id="username" sc-input value="@peduarte" />
      </div>
    </div>
    <div sc-card-footer>
      <button sc-button type="submit">Save changes</button>
    </div>
  </div>
</ng-template>`;

  scSheetTrigger = inject(ScSheetTrigger);

  sheetRef = viewChild.required<TemplateRef<unknown>>('sheet');

  SHEET_SIDES: ('top' | 'bottom' | 'left' | 'right')[] = ['top', 'right', 'bottom', 'left'];

  openSheet(side: 'top' | 'bottom' | 'left' | 'right') {
    const config = new ScSheetConfig();
    config.side = side;

    if (side === 'left' || side === 'right') {
      config.width = '300';
    }

    if (side === 'top' || side === 'bottom') {
      config.height = '300';
    }

    this.scSheetTrigger.open(this.sheetRef(), config);
  }
}
