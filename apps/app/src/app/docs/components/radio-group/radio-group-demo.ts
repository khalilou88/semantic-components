import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScLabel, ScRadio, ScRadioGroup, ScRadioItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-demo',
  imports: [ScRadioGroup, ScRadioItem, ScRadio, ReactiveFormsModule, ScLabel],
  template: `
    <form [formGroup]="radioGroupForm">
      <sc-radio-group value="comfortable" formControlName="radio" name="radio-group">
        <sc-radio-item>
          <input sc-radio value="default" />
          <label sc-label>Default radio</label>
        </sc-radio-item>

        <sc-radio-item>
          <input value="comfortable" sc-radio />
          <label sc-label>Comfortable</label>
        </sc-radio-item>

        <sc-radio-item>
          <input value="compact" sc-radio />
          <label sc-label>Compact</label>
        </sc-radio-item>
      </sc-radio-group>
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
