import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScMenuLabel, ScMenuSeparator, ScMenuShortcut } from '@semantic-components/ui';
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
  ],
  template: `
    <sc-menu-label>My Account</sc-menu-label>
    <sc-menu-separator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <svg-user-icon />
        <span>Profile</span>
        <span sc-menu-shortcut>⇧⌘P</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <svg-credit-card-icon />
        <span>Billing</span>
        <span sc-menu-shortcut>⌘B</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <svg-settings-icon />
        <span>Settings</span>
        <span sc-menu-shortcut>⌘S</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <svg-keyboard-icon />
        <span>Keyboard shortcuts</span>
        <span sc-menu-shortcut>⌘K</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <sc-menu-separator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <svg-users-icon />
        <span>Team</span>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <svg-user-plus-icon />
          <span>Invite users</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <svg-mail-icon />
              <span>Email</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <svg-message-square-icon />
              <span>Message</span>
            </DropdownMenuItem>
            <sc-menu-separator />
            <DropdownMenuItem>
              <svg-circle-plus-icon />
              <span>More...</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>
        <svg-plus-icon />
        <span>New Team</span>
        <span sc-menu-shortcut>⌘+T</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <sc-menu-separator />
    <DropdownMenuItem>
      <svg-github-icon />
      <span>GitHub</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <svg-life-buoy-icon />
      <span>Support</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <svg-cloud-icon />
      <span>API</span>
    </DropdownMenuItem>
    <sc-menu-separator />
    <DropdownMenuItem>
      <svg-log-out-icon />
      <span>Log out</span>
      <span sc-menu-shortcut>⇧⌘Q</span>
    </DropdownMenuItem>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownMenuPage {}
