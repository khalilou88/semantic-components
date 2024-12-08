import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScLabel, ScSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-page',
  imports: [ScLabel, ScSelect],
  template: `
    <label sc-label for="cars">Choose a car:</label>

    <br />

    <select id="cars" sc-select name="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPage {}
