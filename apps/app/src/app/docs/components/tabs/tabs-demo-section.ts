import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { TabsDemo } from './tabs-demo';

@Component({
  selector: 'app-tabs-demo-section',
  imports: [TabsDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-tabs-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
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
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';

@Component({
  selector: 'app-tabs-demo',
  imports: [
    ScTabs,
    ScTab,
    ScTabLabel,
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
  template: \`
    <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
      <sc-tab>
        <sc-tab-label>Account</sc-tab-label>
        <sc-tab-content>
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
        </sc-tab-content>
      </sc-tab>

      <sc-tab>
        <sc-tab-label>Password</sc-tab-label>
        <sc-tab-content>
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
        </sc-tab-content>
      </sc-tab>
    </sc-tabs>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemo {}`;
}
