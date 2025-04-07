import { CdkMenuModule } from '@angular/cdk/menu';
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
  ScButton,
  ScCard,
  ScCardContent,
  ScCodeHighlighter,
  ScHeading,
  ScMenu,
  ScMenuCheckboxItem,
  ScMenuGroup,
  ScMenuItem,
  ScMenuLabel,
  ScMenuRadioGroup,
  ScMenuRadioItem,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuTriggerFor,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
} from '@semantic-components/ui';
import {
  SiChevronRightIcon,
  SiCirclePlusIcon,
  SiCloudIcon,
  SiCreditCardIcon,
  SiGithubIcon,
  SiKeyboardIcon,
  SiLifeBuoyIcon,
  SiLogOutIcon,
  SiMailIcon,
  SiMessageSquareIcon,
  SiPlusIcon,
  SiSettingsIcon,
  SiUserIcon,
  SiUserPlusIcon,
  SiUsersIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-dropdown-menu-page',
  imports: [
    ScMenuShortcut,
    ScMenuLabel,
    ScMenuSeparator,
    SiCreditCardIcon,
    SiUserIcon,
    SiSettingsIcon,
    SiKeyboardIcon,
    SiUsersIcon,
    SiUserPlusIcon,
    SiMailIcon,
    SiMessageSquareIcon,
    SiCirclePlusIcon,
    SiGithubIcon,
    SiLogOutIcon,
    SiCloudIcon,
    SiLifeBuoyIcon,
    SiPlusIcon,
    ScMenuGroup,
    ScMenuItem,
    ScMenuCheckboxItem,
    ScMenuRadioItem,
    ScMenuRadioGroup,
    ScMenuTriggerFor,
    CdkMenuModule,
    ScMenu,
    SiChevronRightIcon,
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
              <span sc-breadcrumb-page>Menu</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Menu</h1>

        <p sc-page-description>
          Displays a menu to the user — such as a set of actions or functions — triggered by a
          button.
        </p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button [scMenuTriggerFor]="menu" sc-button variant="outline">Open</button>

                    <ng-template #menu>
                      <div sc-menu>
                        <sc-menu-label>My Account</sc-menu-label>
                        <hr sc-menu-separator />

                        <sc-menu-group>
                          <button sc-menu-item>
                            <svg si-user-icon></svg>
                            <span>Profile</span>
                            <span sc-menu-shortcut>⇧⌘P</span>
                          </button>
                          <button sc-menu-item>
                            <svg si-credit-card-icon></svg>
                            <span>Billing</span>
                            <span sc-menu-shortcut>⌘B</span>
                          </button>
                          <button sc-menu-item>
                            <svg si-settings-icon></svg>
                            <span>Settings</span>
                            <span sc-menu-shortcut>⌘S</span>
                          </button>
                          <button sc-menu-item>
                            <svg si-keyboard-icon></svg>
                            <span>Keyboard shortcuts</span>
                            <span sc-menu-shortcut>⌘K</span>
                          </button>
                        </sc-menu-group>
                        <hr sc-menu-separator />
                        <sc-menu-group>
                          <button sc-menu-item>
                            <svg si-users-icon></svg>
                            <span>Team</span>
                          </button>

                          <button [scMenuTriggerFor]="sub_menu_1" sc-menu-item>
                            <svg si-user-plus-icon></svg>
                            <span>Invite users</span>
                            <svg class="ml-auto" si-chevron-right-icon></svg>
                          </button>

                          <ng-template #sub_menu_1>
                            <div sc-menu>
                              <button sc-menu-item>
                                <svg si-mail-icon></svg>
                                <span>Email</span>
                              </button>
                              <button sc-menu-item>
                                <svg si-message-square-icon></svg>
                                <span>Message</span>
                              </button>
                              <hr sc-menu-separator />
                              <button sc-menu-item>
                                <svg si-circle-plus-icon></svg>
                                <span>More...</span>
                              </button>
                            </div>
                          </ng-template>

                          <button sc-menu-item>
                            <svg si-plus-icon></svg>
                            <span>New Team</span>
                            <span sc-menu-shortcut>⌘+T</span>
                          </button>
                        </sc-menu-group>
                        <hr sc-menu-separator />
                        <button sc-menu-item>
                          <svg si-github-icon></svg>
                          <span>GitHub</span>
                        </button>
                        <button sc-menu-item>
                          <svg si-life-buoy-icon></svg>
                          <span>Support</span>
                        </button>
                        <button sc-menu-item disabled>
                          <svg si-cloud-icon></svg>
                          <span>API</span>
                        </button>
                        <hr sc-menu-separator />
                        <button sc-menu-item>
                          <svg si-log-out-icon></svg>
                          <span>Log out</span>
                          <span sc-menu-shortcut>⇧⌘Q</span>
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
                <sc-code-highlighter [code]="templateCodeSnippet" language="angular-html" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="angular-ts" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" language="angular-html" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="checkbox">
          <h3 class="mb-2" sc-heading level="3">checkbox</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button [scMenuTriggerFor]="menu2" sc-button variant="outline">Open</button>

                    <ng-template #menu2>
                      <div sc-menu>
                        <sc-menu-label>Appearance</sc-menu-label>
                        <hr sc-menu-separator />
                        <button sc-menu-checkbox-item checked>Status Bar</button>
                        <button sc-menu-checkbox-item checked disabled>Activity Bar</button>
                        <button sc-menu-checkbox-item checked>Panel</button>
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

        <section class="my-10" id="radio-group">
          <h3 class="mb-2" sc-heading level="3">Radio Group</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <button [scMenuTriggerFor]="menu3" sc-button variant="outline">Open</button>

                    <ng-template #menu3>
                      <div sc-menu>
                        <sc-menu-label>Panel Position</sc-menu-label>
                        <hr sc-menu-separator />
                        <div sc-menu-radio-group value="position">
                          <button sc-menu-radio-item value="top">Top</button>
                          <button sc-menu-radio-item value="bottom">Bottom</button>
                          <button sc-menu-radio-item value="right">Right</button>
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
                  <ul class="m-0 list-none pl-4"></ul>
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
export default class MenuPage {
  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScMenu,
  ScMenuCheckboxItem,
  ScMenuGroup,
  ScMenuItem,
  ScMenuLabel,
  ScMenuRadioGroup,
  ScMenuRadioItem,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuTriggerFor,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<button [scMenuTriggerFor]="menu" sc-button variant="outline">Open</button>

<ng-template #menu>
  <div sc-menu>
    <sc-menu-label>My Account</sc-menu-label>
    <hr sc-menu-separator />

    <sc-menu-group>
      <button sc-menu-item>
        <svg si-user-icon></svg>
        <span>Profile</span>
        <span sc-menu-shortcut>⇧⌘P</span>
      </button>
      <button sc-menu-item>
        <svg si-credit-card-icon></svg>
        <span>Billing</span>
        <span sc-menu-shortcut>⌘B</span>
      </button>
      <button sc-menu-item>
        <svg si-settings-icon></svg>
        <span>Settings</span>
        <span sc-menu-shortcut>⌘S</span>
      </button>
      <button sc-menu-item>
        <svg si-keyboard-icon></svg>
        <span>Keyboard shortcuts</span>
        <span sc-menu-shortcut>⌘K</span>
      </button>
    </sc-menu-group>
    <hr sc-menu-separator />
    <sc-menu-group>
      <button sc-menu-item>
        <svg si-users-icon></svg>
        <span>Team</span>
      </button>

      <button [scMenuTriggerFor]="sub_menu_1" sc-menu-item>
        <svg si-user-plus-icon></svg>
        <span>Invite users</span>
        <svg class="ml-auto" si-chevron-right-icon></svg>
      </button>

      <ng-template #sub_menu_1>
        <div sc-menu>
          <button sc-menu-item>
            <svg si-mail-icon></svg>
            <span>Email</span>
          </button>
          <button sc-menu-item>
            <svg si-message-square-icon></svg>
            <span>Message</span>
          </button>
          <hr sc-menu-separator />
          <button sc-menu-item>
            <svg si-circle-plus-icon></svg>
            <span>More...</span>
          </button>
        </div>
      </ng-template>

      <button sc-menu-item>
        <svg si-plus-icon></svg>
        <span>New Team</span>
        <span sc-menu-shortcut>⌘+T</span>
      </button>
    </sc-menu-group>
    <hr sc-menu-separator />
    <button sc-menu-item>
      <svg si-github-icon></svg>
      <span>GitHub</span>
    </button>
    <button sc-menu-item>
      <svg si-life-buoy-icon></svg>
      <span>Support</span>
    </button>
    <button sc-menu-item disabled>
      <svg si-cloud-icon></svg>
      <span>API</span>
    </button>
    <hr sc-menu-separator />
    <button sc-menu-item>
      <svg si-log-out-icon></svg>
      <span>Log out</span>
      <span sc-menu-shortcut>⇧⌘Q</span>
    </button>
  </div>
</ng-template>`;
}
