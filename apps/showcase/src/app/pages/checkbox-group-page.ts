import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckboxGroup, ScCheckboxItem } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-group-page',
  imports: [ScCheckboxGroup, ScCheckboxItem],
  template: `
    <sc-checkbox-group>
      @for (topping of toppings; track topping) {
        <sc-checkbox-item [label]="topping" [value]="topping" />
      }
    </sc-checkbox-group>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxGroupPage {
  toppings = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];
}
