import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/ui';

@Component({
  selector: 'app-tabs-page',
  imports: [ScTabs, ScTab, ScTabLabel, ScTabContent],
  template: `
    <sc-tabs class="w-[400px]" labelsHostClass="grid w-full grid-cols-2" contentsHostClass="">
      <sc-tab>
        <sc-tab-label>Account</sc-tab-label>
        <sc-tab-content>Content 1</sc-tab-content>
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
