import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScMenuContent,
  ScMenuGroup,
  ScMenuItem,
  ScMenuLabel,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuSub,
  ScMenuSubContent,
  ScMenuSubTrigger,
} from '@semantic-components/ui';
import {
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
    ScMenuSub,
    ScMenuSubTrigger,
    ScMenuSubContent,
    ScMenuContent,
  ],
  template: `
    <div class="m-10">
      <sc-menu-content>
        <sc-menu-label>My Account</sc-menu-label>
        <sc-menu-separator />
        <sc-menu-group>
          <sc-menu-item>
            <svg-user-icon />
            <span>Profile</span>
            <span sc-menu-shortcut>⇧⌘P</span>
          </sc-menu-item>
          <sc-menu-item>
            <svg-credit-card-icon />
            <span>Billing</span>
            <span sc-menu-shortcut>⌘B</span>
          </sc-menu-item>
          <sc-menu-item>
            <svg-settings-icon />
            <span>Settings</span>
            <span sc-menu-shortcut>⌘S</span>
          </sc-menu-item>
          <sc-menu-item>
            <svg-keyboard-icon />
            <span>Keyboard shortcuts</span>
            <span sc-menu-shortcut>⌘K</span>
          </sc-menu-item>
        </sc-menu-group>
        <sc-menu-separator />
        <sc-menu-group>
          <sc-menu-item>
            <svg-users-icon />
            <span>Team</span>
          </sc-menu-item>
          <sc-menu-sub>
            <sc-menu-sub-trigger>
              <svg-user-plus-icon />
              <span>Invite users</span>
            </sc-menu-sub-trigger>

            <ng-template #sub_menu_1>
              <sc-menu-sub-content>
                <sc-menu-item>
                  <svg-mail-icon />
                  <span>Email</span>
                </sc-menu-item>
                <sc-menu-item>
                  <svg-message-square-icon />
                  <span>Message</span>
                </sc-menu-item>
                <sc-menu-separator />
                <sc-menu-item>
                  <svg-circle-plus-icon />
                  <span>More...</span>
                </sc-menu-item>
              </sc-menu-sub-content>
            </ng-template>
          </sc-menu-sub>
          <sc-menu-item>
            <svg-plus-icon />
            <span>New Team</span>
            <span sc-menu-shortcut>⌘+T</span>
          </sc-menu-item>
        </sc-menu-group>
        <sc-menu-separator />
        <sc-menu-item>
          <svg-github-icon />
          <span>GitHub</span>
        </sc-menu-item>
        <sc-menu-item>
          <svg-life-buoy-icon />
          <span>Support</span>
        </sc-menu-item>
        <sc-menu-item disabled>
          <svg-cloud-icon />
          <span>API</span>
        </sc-menu-item>
        <sc-menu-separator />
        <sc-menu-item>
          <svg-log-out-icon />
          <span>Log out</span>
          <span sc-menu-shortcut>⇧⌘Q</span>
        </sc-menu-item>
      </sc-menu-content>
    </div>
  `,
  styles: `
    .svg {
      @apply size-4;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownMenuPage {}
