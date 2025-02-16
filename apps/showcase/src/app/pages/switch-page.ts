import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-switch-page',
  imports: [ScSwitch, ReactiveFormsModule, JsonPipe],
  template: `
    <div class="m-10">
      <br />
      <br />
      <br />
      <form [formGroup]="switchForm">
        <div class="flex items-center space-x-2">
          <input sc-switch formControlName="switch" />

          Airplane Mode
        </div>

        <br />
        <br />

        <div class="flex items-center space-x-2">
          <input [disabled]="true" sc-switch formControlName="switch2" />

          Airplane Mode 2
        </div>
      </form>

      <br />
      <br />
      <br />
      {{ switchForm.value | json }}
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchPage {
  switchForm = new FormGroup({
    switch: new FormControl(),
    switch2: new FormControl(),
  });
}
