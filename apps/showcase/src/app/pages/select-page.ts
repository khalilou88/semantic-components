import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScLabel, ScOption, ScSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-page',
  imports: [ScLabel, ScSelect, ScOption],
  template: `
    <label sc-label for="cars">Choose a car:</label>

    <div class="w-[180px]">
      <sc-select id="cars" name="cars">
        <sc-option value="volvo">Volvo</sc-option>
        <sc-option value="saab">Saab</sc-option>
        <sc-option value="mercedes">Mercedes</sc-option>
        <sc-option value="audi">Audi</sc-option>
      </sc-select>

      <div></div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPage {}
