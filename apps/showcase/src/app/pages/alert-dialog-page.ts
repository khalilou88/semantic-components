import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  ScAlertDialogTrigger,
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
  selector: 'app-alert-dialog-page',
  imports: [
    ScButton,
    ReactiveFormsModule,
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
              <span sc-breadcrumb-page>Alert Dialog</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Alert Dialog</h1>

        <p sc-page-description>
          A modal dialog that interrupts the user with important content and expects a response.
        </p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button (click)="deleteAccount()" sc-button variant="secondary">
                      Delete My account
                    </button>
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
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {
  scAlertDialogTrigger = inject(ScAlertDialogTrigger);

  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScAlertDialogTrigger,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<button (click)="deleteAccount()" sc-button variant="secondary">
  Delete My account
</button>`;

  async deleteAccount() {
    const actionConfirmed = await this.scAlertDialogTrigger.open(
      'Are you absolutely sure?',
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      'Continue',
    );

    if (actionConfirmed) {
      console.log('Delete the account');
    } else {
      console.log('Action canceled');
    }
  }
}
