import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/ui';

@Component({
  selector: 'app-tabs-page',
  imports: [ScTabs, ScTab, ScTabLabel, ScTabContent],
  template: `
    <sc-tabs>
      <sc-tab>
        <sc-tab-label>Label 1</sc-tab-label>
        <sc-tab-content>Content 1</sc-tab-content>
      </sc-tab>

      <sc-tab>
        <sc-tab-label>Label 2</sc-tab-label>
        <sc-tab-content>Content 2</sc-tab-content>
      </sc-tab>
    </sc-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TabsPage {}
