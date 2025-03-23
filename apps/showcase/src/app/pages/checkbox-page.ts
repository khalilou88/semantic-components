import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  ScCheckbox,
  ScCheckbox1,
  ScCheckboxContainer,
  ScCheckboxField,
  ScCodeHighlighter,
  ScDescription,
  ScLabel,
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
  selector: 'app-checkbox-page',
  imports: [
    ScCheckbox,
    ScCheckbox1,
    ReactiveFormsModule,
    ScButton,
    ScCheckboxField,
    ScLabel,
    ScDescription,
    ScCheckboxContainer,
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
    ScButton,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Checkbox</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Checkbox</h1>

        <p sc-page-description>
          A control that allows the user to toggle between checked and not checked.
        </p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <sc-checkbox-field>
                      <sc-checkbox1></sc-checkbox1>
                      <label sc-label>Accept terms and conditions</label>
                    </sc-checkbox-field>
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

        <section class="my-10" id="with-text">
          <h3 class="mb-2" sc-heading level="3">With text</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <sc-checkbox-field>
                      <sc-checkbox1></sc-checkbox1>
                      <label sc-label>Accept terms and conditions</label>
                      <p sc-description>You agree to our Terms of Service and Privacy Policy.</p>
                    </sc-checkbox-field>
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

        <section class="my-10" id="disabled">
          <h3 class="mb-2" sc-heading level="3">Disabled</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <sc-checkbox-field>
                      <sc-checkbox1 disabled />
                      <label sc-label>Accept terms and conditions</label>
                    </sc-checkbox-field>
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

        <section class="my-10" id="form">
          <h3 class="mb-2" sc-heading level="3">Form</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <form class="space-y-6">
                      <label sc-checkbox-container>
                        <sc-checkbox1 checked />
                        <div class="grid gap-1.5 font-normal">
                          <p class="text-sm leading-none font-medium">Enable notifications</p>
                          <p class="text-muted-foreground text-sm">
                            You can enable or disable notifications at any time.
                          </p>
                        </div>
                      </label>
                      <button sc-button type="submit">Submit</button>
                    </form>
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

        <section class="my-10" id="new-checkbox">
          <h3 class="mb-2" sc-heading level="3">New checkbox</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <input type="checkbox" />

                    <input sc-checkbox type="checkbox" checked />

                    <input indeterminate sc-checkbox type="checkbox" />
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
export default class CheckboxPage {
  disable() {
    if (this.checkForm.get('check')?.disabled) {
      this.checkForm.get('check')?.enable();
    } else {
      this.checkForm.get('check')?.disable();
    }
  }
  checkForm = new FormGroup({
    check: new FormControl(),
    check2: new FormControl(),
  });

  readonly checked = signal(false);

  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScCheckbox,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<input sc-checkbox type="checkbox" />`;
}
