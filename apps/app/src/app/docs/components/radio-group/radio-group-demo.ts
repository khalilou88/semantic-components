import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScLabel, ScRadio, ScRadioGroup, ScRadioItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-demo',
  imports: [ScRadioGroup, ScRadioItem, ScRadio, ReactiveFormsModule, JsonPipe, ScLabel],
  template: `
    <form [formGroup]="radioGroupForm">
      <sc-radio-group value="comfortable" formControlName="radio" name="radio-group">
        <sc-radio-item>
          <input id="r1" sc-radio value="default" />
          <label for="r1" sc-label>Default radio</label>
        </sc-radio-item>

        <sc-radio-item>
          <input id="r2" value="comfortable" sc-radio />
          <label for="r2" sc-label>Comfortable</label>
        </sc-radio-item>

        <sc-radio-item>
          <input id="r3" value="compact" sc-radio />
          <label for="r3" sc-label>Compact</label>
        </sc-radio-item>
      </sc-radio-group>

      <br />
      <br />
      <br />
      <br />
      <br />

      {{ radioGroupForm.value | json }}
    </form>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupDemo {
  readonly radioGroupForm = new FormGroup({
    radio: new FormControl('compact'),
  });
}
