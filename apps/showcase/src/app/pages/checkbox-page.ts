import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ScButton,
  ScCheckbox,
  ScCheckbox2,
  ScCheckboxContainer,
  ScCheckboxField,
  ScDescription,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-page',
  imports: [
    ScCheckbox,
    ScCheckbox2,
    ReactiveFormsModule,
    JsonPipe,
    ScButton,
    ScCheckboxField,
    ScLabel,
    ScDescription,
    ScCheckboxContainer,
  ],
  template: `
    <div class="m-10">
      <br />
      <br />
      <br />

      <input sc-checkbox2 type="checkbox" checked />
      <br />
      <br />
      <br />

      <input indeterminate sc-checkbox2 type="checkbox" />

      <br />
      <br />
      <br />

      <sc-checkbox-field>
        <sc-checkbox></sc-checkbox>
        <label sc-label>Accept terms and conditions</label>
        <p sc-description>A description.</p>
      </sc-checkbox-field>

      <br />
      <br />
      <br />

      <form [formGroup]="checkForm">
        <sc-checkbox formControlName="check" />

        <br />

        <input sc-checkbox2 formControlName="check2" type="checkbox" />
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

      <br />
      <br />
      <br />

      <label sc-checkbox-container>
        <sc-checkbox checked />
        <div class="grid gap-1.5 font-normal">
          <p class="text-sm leading-none font-medium">Enable notifications</p>
          <p class="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </label>
    </div>
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
    check2: new FormControl(),
  });

  readonly checked = signal(false);
}
