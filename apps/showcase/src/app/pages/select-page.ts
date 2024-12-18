import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScLabel, ScOption, ScSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-page',
  imports: [ScLabel, ScSelect, ScOption, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="selectForm">
      <label sc-label for="car">Choose a car:</label>

      <div class="w-[180px]">
        <sc-select id="car" formControlName="car" placeholder="Select a car">
          <sc-option value="volvo">Volvo</sc-option>
          <sc-option value="saab">Saab</sc-option>
          <sc-option value="mercedes">Mercedes</sc-option>
          <sc-option value="audi">Audi</sc-option>
        </sc-select>

        <div>
          {{ this.selectForm.value | json }}
        </div>
      </div>
    </form>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SelectPage {
  selectForm = new FormGroup({
    car: new FormControl(''),
  });
}
