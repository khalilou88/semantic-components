import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TelInputComponent } from './tel-input.component';

@Component({
  selector: 'sc-form-field-custom-control',
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe, JsonPipe, TelInputComponent],
  template: `
    <div [formGroup]="form">
      <div>
        <label for="id_tel">Phone number</label>
        <sc-tel-input id="id_tel" formControlName="tel" required />
      </div>
      <p>Entered value: {{ form.valueChanges | async | json }}</p>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldCustomControlComponent {
  readonly form = new FormGroup({
    tel: new FormControl(null),
  });
}
