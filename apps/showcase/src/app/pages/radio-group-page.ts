import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-page',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: `
    <br />
    <br />
    <br />

    <div class="m-10">
      <div sc-radio-group>
        <sc-radio-group-item id="flexRadioDefault1" name="flexRadioDefault">
          Default radio
        </sc-radio-group-item>

        <sc-radio-group-item id="flexRadioDefault12" name="flexRadioDefault">
          Comfortable
        </sc-radio-group-item>

        <sc-radio-group-item id="flexRadioDefault18" name="flexRadioDefault">
          Compact
        </sc-radio-group-item>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
