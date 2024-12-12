import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/ui';
import {
  ScCard,
  ScCardDescription,
  ScCardHeader,
  ScCardTitle,
} from 'libs/ui/src/lib/components/card';

@Component({
  selector: 'app-tabs-page',
  imports: [
    ScTabs,
    ScTab,
    ScTabLabel,
    ScTabContent,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
  ],
  template: `
    <sc-tabs class="w-[400px]" labelsHostClass="grid w-full grid-cols-2" contentsHostClass="">
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
          </div>
        </sc-tab-content>
      </sc-tab>

      <sc-tab>
        <sc-tab-label>Password</sc-tab-label>
        <sc-tab-content>Content 2</sc-tab-content>
      </sc-tab>
    </sc-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TabsPage {}
