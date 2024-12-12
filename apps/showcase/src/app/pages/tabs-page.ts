import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTabs } from '@semantic-components/ui';

@Component({
  selector: 'app-tabs-page',
  imports: [ScTabs],
  template: `
    <sc-tabs></sc-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TabsPage {}
