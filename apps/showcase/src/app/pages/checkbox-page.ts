import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScButton, ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-page',
  imports: [ScCheckbox, ReactiveFormsModule, JsonPipe, ScButton],
  template: `
    <sc-checkbox>Accept terms and conditions</sc-checkbox>

    <br />
    <br />
    <br />

    <form [formGroup]="checkForm">
      <sc-checkbox formControlName="check" />
    </form>
    <br />
    <button (click)="disable()" sc-button>Disable or enable FormControl</button>

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
    indeterminate
    <sc-checkbox indeterminate />
    <sc-checkbox indeterminate="true" />
    <sc-checkbox [indeterminate]="true" />

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

    <br />
    <br />
    <br />
    checked with Two-way binding
    <br />
    checked : {{ checked() }}
    <br />
    <sc-checkbox [(checked)]="checked" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {
  disable() {
    if (this.checkForm.get('check')?.disabled) {
      this.checkForm.get('check')?.enable();
    } else {
      this.checkForm.get('check')?.disable();
    }
  }
  checkForm = new FormGroup({
    check: new FormControl(),
  });

  readonly checked = signal(false);
}
