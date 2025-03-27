import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCheckbox, ScCheckboxGroup, ScCheckboxItem } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-group-demo',
  imports: [ScCheckboxGroup, ScCheckboxItem, ReactiveFormsModule, ScCheckbox],
  template: `
    <form [formGroup]="toppingsForm">
      <sc-checkbox-group formControlName="toppings">
        <div class="font-medium">Toppings</div>

        @for (topping of toppingsArray; track topping) {
          <label sc-checkbox-item>
            <input [value]="topping" sc-checkbox />
            <span class="text-sm font-normal">{{ topping }}</span>
          </label>
        }
      </sc-checkbox-group>
    </form>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupDemo {
  toppingsArray = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];

  toppingsForm = new FormGroup({
    toppings: new FormControl([]),
  });
}
