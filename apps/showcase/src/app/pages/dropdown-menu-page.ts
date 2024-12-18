import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScMenuCheckboxItem,
  ScMenuContent,
  ScMenuGroup,
  ScMenuItem,
  ScMenuLabel,
  ScMenuRadioGroup,
  ScMenuRadioItem,
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
    ScMenuCheckboxItem,
    ScMenuRadioItem,
    ScMenuRadioGroup,
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

    <br />
    <br />
    <br />
    <br />

    Checkboxes

    <sc-menu-content>
      <sc-menu-label>Appearance</sc-menu-label>
      <sc-menu-separator />
      <sc-menu-checkbox-item checked>Status Bar</sc-menu-checkbox-item>
      <sc-menu-checkbox-item checked disabled>Activity Bar</sc-menu-checkbox-item>
      <sc-menu-checkbox-item checked>Panel</sc-menu-checkbox-item>
    </sc-menu-content>

    <br />
    <br />
    <br />

    Radio Group

    <sc-menu-content>
      <sc-menu-label>Panel Position</sc-menu-label>
      <sc-menu-separator />
      <sc-menu-radio-group value="position">
        <sc-menu-radio-item value="top">Top</sc-menu-radio-item>
        <sc-menu-radio-item value="bottom">Bottom</sc-menu-radio-item>
        <sc-menu-radio-item value="right">Right</sc-menu-radio-item>
      </sc-menu-radio-group>
    </sc-menu-content>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownMenuPage {}
