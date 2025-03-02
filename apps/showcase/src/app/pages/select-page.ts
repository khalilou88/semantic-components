import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CustomOption, CustomSelect, ScLabel, ScOption, ScSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-page',
  imports: [ScLabel, ScSelect, ScOption, ReactiveFormsModule, JsonPipe, CustomSelect, CustomOption],
  template: `
    <form [formGroup]="selectForm">
      <label sc-label for="car">Choose a car:</label>

      <div class="w-[180px]">
        <sc-select id="car" formControlName="car" placeholder="Select a car">
          <sc-option value="volvo2">Volvo2</sc-option>
          <sc-option value="saab2">Saab2</sc-option>
          <sc-option value="mercedes2">Mercedes2</sc-option>
          <sc-option value="audi2">Audi2</sc-option>

          <sc-option value="volvo3">Volvo3</sc-option>
          <sc-option value="saab3">Saab3</sc-option>
          <sc-option value="mercedes3">Mercedes3</sc-option>
          <sc-option value="audi3">Audi3</sc-option>

          <sc-option value="volvo4">Volvo4</sc-option>
          <sc-option value="saab4">Saab4</sc-option>
          <sc-option value="mercedes4">Mercedes4</sc-option>
          <sc-option value="audi4">Audi4</sc-option>

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

    <br />
    <br />

    <sc-select id="numbers" (valueChange)="f($event)" value="3" placeholder="Select a number">
      <sc-option value="1">1</sc-option>
      <sc-option value="2">2</sc-option>
      <sc-option value="3">3</sc-option>
      <sc-option value="4">4</sc-option>
    </sc-select>

    <br />
    <br />

    <sc-select id="ids" placeholder="Select an id">
      <sc-option value="1">1</sc-option>
      <sc-option value="2">2</sc-option>
      <sc-option value="3">3</sc-option>
      <sc-option value="4">4</sc-option>
    </sc-select>

    <div class="p-6 max-w-md mx-auto">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Custom Select Demo</h3>

      <sc-custom-select
        [value]="selectedValue"
        (valueChange)="onValueChange($event)"
        placeholder="Select a fruit"
      >
        <sc-custom-option [value]="'apple'">Apple</sc-custom-option>
        <sc-custom-option [value]="'banana'">Banana</sc-custom-option>
        <sc-custom-option [value]="'orange'">Orange</sc-custom-option>
        <sc-custom-option [value]="'grape'">Grape</sc-custom-option>
        <sc-custom-option [value]="'strawberry'">Strawberry</sc-custom-option>
        <sc-custom-option [value]="'mango'">Mango</sc-custom-option>
      </sc-custom-select>

      @if (selectedValue) {
        <p class="mt-4 text-sm text-gray-700">
          Selected value:
          <span class="font-medium">{{ selectedValue }}</span>
        </p>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SelectPage {
  selectForm = new FormGroup({
    car: new FormControl('audi'),
  });

  f(event: any) {
    console.log(event);
  }

  selectedValue: string | null = null;

  onValueChange(value: string) {
    this.selectedValue = value;
    console.log('Selected:', value);
  }
}
