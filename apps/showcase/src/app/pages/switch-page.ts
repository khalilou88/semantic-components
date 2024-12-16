import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-switch-page',
  imports: [ScSwitch, ReactiveFormsModule, JsonPipe],
  template: `
    <br />
    <br />
    <br />
    <form [formGroup]="switchForm">
      <sc-switch formControlName="switch">Airplane Mode</sc-switch>
    </form>

    <br />
    <br />
    <br />
    {{ switchForm.value | json }}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchPage {
  switchForm = new FormGroup({
    switch: new FormControl(),
  });
}
