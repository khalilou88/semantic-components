import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScCard,
  ScCardContent,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScInput,
  ScLabel,
  ScTab,
  ScTabContent,
  ScTabList,
  ScTabPanel,
  ScTabs,
} from '@semantic-components/ui';

@Component({
  selector: 'app-tabs-demo',
  imports: [
    ScTabs,
    ScTabList,
    ScTab,
    ScTabPanel,
    ScTabContent,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScCardFooter,
    ScLabel,
    ScInput,
    ScButton,
  ],
  template: `
    <div class="w-[400px]" sc-tabs value="account">
      <div class="grid w-full grid-cols-2" sc-tab-list>
        <button value="account" sc-tab>Account</button>
        <button value="password" sc-tab>Password</button>
      </div>

      <div sc-tab-panel>
        <ng-template scTabContent="account">
          <div sc-card>
            <div sc-card-header>
              <h2 sc-card-title>Account</h2>
              <p sc-card-description>
                Make changes to your account here. Click save when you're done.
              </p>
            </div>

            <div class="space-y-2" sc-card-content>
              <div class="space-y-1">
                <label sc-label for="name">Name</label>
                <input id="name" sc-input value="Pedro Duarte" />
              </div>
              <div class="space-y-1">
                <label sc-label for="username">Username</label>
                <input id="username" sc-input value="@peduarte" />
              </div>
            </div>
            <div sc-card-footer>
              <button sc-button type="submit">Save changes</button>
            </div>
          </div>
        </ng-template>

        <ng-template scTabContent="password">
          <div sc-card>
            <div sc-card-header>
              <h2 sc-card-title>Password</h2>
              <p sc-card-description>
                Change your password here. After saving, you'll be logged out.
              </p>
            </div>
            <div class="space-y-2" sc-card-content>
              <div class="space-y-1">
                <label sc-label for="current">Current password</label>
                <input id="current" sc-input type="password" />
              </div>
              <div class="space-y-1">
                <label sc-label for="new">New password</label>
                <input id="new" sc-input type="password" />
              </div>
            </div>
            <div sc-card-footer>
              <button sc-button>Save password</button>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemo {}
