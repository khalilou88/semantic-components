import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScCommand,
  ScCommandEmpty,
  ScCommandGroup,
  ScCommandInput,
  ScCommandItem,
  ScCommandList,
  ScCommandSeparator,
  ScCommandShortcut,
} from '@semantic-components/ui';
import {
  SvgCalculatorIcon,
  SvgCalendarIcon,
  SvgCreditCardIcon,
  SvgSettingsIcon,
  SvgSmileIcon,
  SvgUserIcon,
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
    SvgCalendarIcon,
    SvgSmileIcon,
    SvgCalculatorIcon,
    SvgUserIcon,
    SvgCreditCardIcon,
    SvgSettingsIcon,
  ],
  template: `
    <div class="m-10">
      <sc-command class="rounded-lg border shadow-md md:min-w-[450px]">
        <sc-command-input placeholder="Type a command or search..." />
        <sc-command-list>
          <sc-command-empty>No results found.</sc-command-empty>
          <sc-command-group heading="Suggestions">
            <sc-command-item>
              <svg-calendar-icon />
              <span>Calendar</span>
            </sc-command-item>
            <sc-command-item>
              <svg-smile-icon />
              <span>Search Emoji</span>
            </sc-command-item>
            <sc-command-item disabled>
              <svg-calculator-icon />
              <span>Calculator</span>
            </sc-command-item>
          </sc-command-group>
          <sc-command-separator />
          <sc-command-group heading="Settings">
            <sc-command-item>
              <svg-user-icon />
              <span>Profile</span>
              <sc-command-shortcut>⌘P</sc-command-shortcut>
            </sc-command-item>
            <sc-command-item>
              <svg-credit-card-icon />
              <span>Billing</span>
              <sc-command-shortcut>⌘B</sc-command-shortcut>
            </sc-command-item>
            <sc-command-item>
              <svg-settings-icon />
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
