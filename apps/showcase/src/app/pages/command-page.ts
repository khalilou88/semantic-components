import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScCommand,
  ScCommandEmpty,
  ScCommandError,
  ScCommandGroup,
  ScCommandInput,
  ScCommandItem,
  ScCommandList,
  ScCommandLoading,
  ScCommandSeparator,
  ScCommandShortcut,
} from '@semantic-components/ui';
import {
  SiCalculatorIcon,
  SiCalendarIcon,
  SiCreditCardIcon,
  SiSettingsIcon,
  SiSmileIcon,
  SiUserIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-command-page',
  imports: [
    ScCommand,
    ScCommandInput,
    ScCommandList,
    ScCommandEmpty,
    ScCommandGroup,
    ScCommandItem,
    ScCommandSeparator,
    ScCommandShortcut,
    SiCalendarIcon,
    SiSmileIcon,
    SiCalculatorIcon,
    SiUserIcon,
    SiCreditCardIcon,
    SiSettingsIcon,
    ScCommandError,
    ScCommandLoading,
  ],
  template: `
    <div class="m-10">
      <sc-command class="rounded-lg border shadow-md md:min-w-[450px]">
        <sc-command-input placeholder="Type a command or search..." />
        <sc-command-list>
          <sc-command-loading>Loading.</sc-command-loading>
          <sc-command-error>Error.</sc-command-error>
          <sc-command-empty>No results found.</sc-command-empty>
          <sc-command-group heading="Suggestions">
            <sc-command-item>
              <svg si-calendar-icon></svg>
              <span>Calendar</span>
            </sc-command-item>
            <sc-command-item>
              <svg si-smile-icon></svg>
              <span>Search Emoji</span>
            </sc-command-item>
            <sc-command-item disabled>
              <svg si-calculator-icon></svg>
              <span>Calculator</span>
            </sc-command-item>
          </sc-command-group>
          <sc-command-separator />
          <sc-command-group heading="Settings">
            <sc-command-item>
              <svg si-user-icon></svg>
              <span>Profile</span>
              <sc-command-shortcut>⌘P</sc-command-shortcut>
            </sc-command-item>
            <sc-command-item>
              <svg si-credit-card-icon></svg>
              <span>Billing</span>
              <sc-command-shortcut>⌘B</sc-command-shortcut>
            </sc-command-item>
            <sc-command-item>
              <svg si-settings-icon></svg>
              <span>Settings</span>
              <sc-command-shortcut>⌘S</sc-command-shortcut>
            </sc-command-item>
          </sc-command-group>
        </sc-command-list>
      </sc-command>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommandPage {}
