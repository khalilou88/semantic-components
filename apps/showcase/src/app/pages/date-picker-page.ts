import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  ScCodeHighlighter,
  ScDatePicker,
  ScDatePickerToggle,
  ScInput,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScSettings,
} from '@semantic-components/ui';
import { SiCalendarIcon, SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-date-picker-page',
  imports: [
    ScDatePicker,
    ScDatePickerToggle,
    SiCalendarIcon,
    ScInput,
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
              <span sc-breadcrumb-page>Date Picker</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Date Picker</h1>

        <p sc-page-description>A date picker component.</p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10" sc-card-content>
                    <div>{{ settings.dateFormatPattern() }}</div>
                    <sc-date-picker>
                      <button sc-date-picker-toggle>
                        <svg si-calendar-icon></svg>
                      </button>
                      <input placeholder="Select date" sc-input type="text" />
                    </sc-date-picker>
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
export default class DatePickerPage {
  settings = inject(ScSettings);

  class = signal<string>('block w-full');

  importCodeSnippet = `import {
    ScDatePicker,
    ScDatePickerToggle,
  } from '@semantic-components/ui';`;

  templateCodeSnippet = `<sc-date-picker>
  <button sc-date-picker-toggle>
    <svg si-calendar-icon></svg>
  </button>
  <input placeholder="Select date" sc-input type="text" />
</sc-date-picker>`;
}
