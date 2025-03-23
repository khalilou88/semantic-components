import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCheckbox, ScCheckboxGroup, ScCheckboxItem } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-group-page',
  imports: [ScCheckboxGroup, ScCheckboxItem, ReactiveFormsModule, JsonPipe, ScCheckbox],
  template: `
    <form [formGroup]="toppingsForm">
      <sc-checkbox-group formControlName="toppings">
        @for (topping of toppingsArray; track topping) {
          <label sc-checkbox-item>
            <input [value]="topping" sc-checkbox />
            {{ topping }}
          </label>
        }
      </sc-checkbox-group>
    </form>

    <br />
    <br />
    <br />
    {{ toppingsForm.value | json }}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxGroupPage {
  toppingsArray = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];

  toppingsForm = new FormGroup({
    toppings: new FormControl([]),
  });
}
