import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScLabel, ScSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-page',
  imports: [ScLabel, ScSelect, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="selectForm">
      <label sc-label for="car">Choose a car:</label>

      <div class="w-[180px]">
        <sc-select id="car" [options]="options" formControlName="car" placeholder="Select a car" />

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
  options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  selectForm = new FormGroup({
    car: new FormControl(''),
  });
}
