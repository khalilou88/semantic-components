import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScMenu,
  ScMenuGroup,
  ScMenuItem,
  ScMenuLabel,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuTriggerFor,
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
  selector: 'app-menu-demo',
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
    ScMenuTriggerFor,
    CdkMenuModule,
    ScMenu,
    SiChevronRightIcon,
    ScButton,
    ScButton,
    SiChevronRightIcon,
  ],
  template: `
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDemo {}
