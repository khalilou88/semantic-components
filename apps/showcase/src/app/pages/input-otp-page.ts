import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  ScHeading,
  ScInputOTPGroup,
  ScInputOTPSeparator,
  ScInputOTPSlot,
  ScInputOtp,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
} from '@semantic-components/ui';
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-input-otp-page',
  imports: [
    ScInputOTPGroup,
    ScInputOtp,
    ScInputOTPSeparator,
    ScInputOTPSlot,
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
    ScHeading,
    ScCodeHighlighter,
    ScCardContent,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Input OTP</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Input OTP</h1>

        <p sc-page-description>
          Accessible one-time password component with copy paste functionality.
        </p>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="angular-ts" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" language="angular-html" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="variants">
          <h3 class="mb-2" sc-heading level="3">With separator</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <form [formGroup]="inputOtpGroupForm">
                      <sc-input-otp formControlName="otp">
                        <sc-input-otp-group>
                          <sc-input-otp-slot />
                          <sc-input-otp-slot />
                          <sc-input-otp-slot />
                        </sc-input-otp-group>
                        <sc-input-otp-separator />
                        <sc-input-otp-group>
                          <sc-input-otp-slot />
                          <sc-input-otp-slot />
                          <sc-input-otp-slot />
                        </sc-input-otp-group>
                      </sc-input-otp>
                    </form>
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
export default class InputOtpPage {
  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScInputOTPGroup,
  ScInputOTPSeparator,
  ScInputOTPSlot,
  ScInputOtp,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<sc-input-otp formControlName="otp">
  <sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </sc-input-otp-group>
  <sc-input-otp-separator />
  <sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </sc-input-otp-group>
</sc-input-otp>`;

  inputOtpGroupForm = new FormGroup({
    otp: new FormControl('123456'),
  });
}
