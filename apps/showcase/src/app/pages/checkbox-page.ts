import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-page',
  imports: [ScCheckbox, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="checkForm">
      <sc-checkbox formControlName="check" />
    </form>

    <br />
    <br />
    <br />
    {{ checkForm.value | json }}

    <br />
    <br />
    <br />
    disabled
    <sc-checkbox disabled />
    <sc-checkbox disabled="true" />
    <sc-checkbox [disabled]="true" />

    <br />
    <br />
    <br />
    <br />
    checked

    <input checked type="checkbox" />
    <input checked="true" type="checkbox" />
    <input [checked]="true" type="checkbox" />

    <sc-checkbox checked />
    <sc-checkbox checked="true" />
    <sc-checkbox [checked]="true" />
    <br />
    <br />
    <br />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {
  checkForm = new FormGroup({
    check: new FormControl(),
  });
}
