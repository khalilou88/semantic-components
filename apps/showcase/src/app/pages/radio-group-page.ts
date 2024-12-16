import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-page',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: `
    <div class="m-10">
      <sc-radio-group defaultValue="comfortable">
        <sc-radio-group-item id="r1" value="default">Default radio</sc-radio-group-item>

        <sc-radio-group-item id="r2" value="comfortable">Comfortable</sc-radio-group-item>

        <sc-radio-group-item id="r3" value="compact">Compact</sc-radio-group-item>
      </sc-radio-group>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
