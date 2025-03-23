import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CheckboxGroupDemo } from './checkbox-group-demo';

@Component({
  selector: 'app-checkbox-group-demo-section',
  imports: [CheckboxGroupDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code">
      <app-checkbox-group-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupDemoSection {
  protected readonly code = `import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCheckbox, ScCheckboxGroup, ScCheckboxItem } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-group-demo',
  imports: [ScCheckboxGroup, ScCheckboxItem, ReactiveFormsModule, JsonPipe, ScCheckbox],
  template: \`
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

    <div class="mt-10">
      {{ toppingsForm.value | json }}
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupDemo {
  toppingsArray = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];

  toppingsForm = new FormGroup({
    toppings: new FormControl([]),
  });
}`;
}
