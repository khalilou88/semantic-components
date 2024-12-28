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
}
