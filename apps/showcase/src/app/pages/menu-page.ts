import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
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
} from '@semantic-components/ui';
import {
  SvgChevronRightIcon,
  SvgCirclePlusIcon,
  SvgCloudIcon,
  SvgCreditCardIcon,
  SvgGithubIcon,
  SvgKeyboardIcon,
  SvgLifeBuoyIcon,
  SvgLogOutIcon,
  SvgMailIcon,
  SvgMessageSquareIcon,
  SvgPlusIcon,
  SvgSettingsIcon,
  SvgUserIcon,
  SvgUserPlusIcon,
  SvgUsersIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-dropdown-menu-page',
  imports: [
    ScMenuShortcut,
    ScMenuLabel,
    ScMenuSeparator,
    SvgCreditCardIcon,
    SvgUserIcon,
    SvgSettingsIcon,
    SvgKeyboardIcon,
    SvgUsersIcon,
    SvgUserPlusIcon,
    SvgMailIcon,
    SvgMessageSquareIcon,
    SvgCirclePlusIcon,
    SvgGithubIcon,
    SvgLogOutIcon,
    SvgCloudIcon,
    SvgLifeBuoyIcon,
    SvgPlusIcon,
    ScMenuGroup,
    ScMenuItem,
    ScMenuCheckboxItem,
    ScMenuRadioItem,
    ScMenuRadioGroup,
    ScMenuTriggerFor,
    CdkMenuModule,
    ScMenu,
    SvgChevronRightIcon,
    ScButton,
  ],
  template: `
    <div class="m-10">
      <button [scMenuTriggerFor]="menu" sc-button variant="outline">Open</button>

      <ng-template #menu>
        <div sc-menu>
          <sc-menu-label>My Account</sc-menu-label>
          <hr sc-menu-separator />

          <sc-menu-group>
            <button sc-menu-item>
              <svg-user-icon />
              <span>Profile</span>
              <span sc-menu-shortcut>⇧⌘P</span>
            </button>
            <button sc-menu-item>
              <svg-credit-card-icon />
              <span>Billing</span>
              <span sc-menu-shortcut>⌘B</span>
            </button>
            <button sc-menu-item>
              <svg-settings-icon />
              <span>Settings</span>
              <span sc-menu-shortcut>⌘S</span>
            </button>
            <button sc-menu-item>
              <svg-keyboard-icon />
              <span>Keyboard shortcuts</span>
              <span sc-menu-shortcut>⌘K</span>
            </button>
          </sc-menu-group>
          <hr sc-menu-separator />
          <sc-menu-group>
            <button sc-menu-item>
              <svg-users-icon />
              <span>Team</span>
            </button>

            <button [scMenuTriggerFor]="sub_menu_1" sc-menu-item>
              <svg-user-plus-icon />
              <span>Invite users</span>
              <svg-chevron-right-icon class="ml-auto" />
            </button>

            <ng-template #sub_menu_1>
              <div sc-menu>
                <button sc-menu-item>
                  <svg-mail-icon />
                  <span>Email</span>
                </button>
                <button sc-menu-item>
                  <svg-message-square-icon />
                  <span>Message</span>
                </button>
                <hr sc-menu-separator />
                <button sc-menu-item>
                  <svg-circle-plus-icon />
                  <span>More...</span>
                </button>
              </div>
            </ng-template>

            <button sc-menu-item>
              <svg-plus-icon />
              <span>New Team</span>
              <span sc-menu-shortcut>⌘+T</span>
            </button>
          </sc-menu-group>
          <hr sc-menu-separator />
          <button sc-menu-item>
            <svg-github-icon />
            <span>GitHub</span>
          </button>
          <button sc-menu-item>
            <svg-life-buoy-icon />
            <span>Support</span>
          </button>
          <button sc-menu-item disabled>
            <svg-cloud-icon />
            <span>API</span>
          </button>
          <hr sc-menu-separator />
          <button sc-menu-item>
            <svg-log-out-icon />
            <span>Log out</span>
            <span sc-menu-shortcut>⇧⌘Q</span>
          </button>
        </div>
      </ng-template>
    </div>

    <br />
    <br />
    <br />
    <br />

    Checkboxes

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

    <br />
    <br />
    <br />

    Radio Group

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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuPage {}
