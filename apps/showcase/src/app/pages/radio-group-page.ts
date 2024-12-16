import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScRadioGroup, ScRadioItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-page',
  imports: [ScRadioGroup, ScRadioItem, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="radioGroupForm">
      <sc-radio-group value="comfortable" formControlName="radio">
        <sc-radio-item id="r1" value="default">Default radio</sc-radio-item>

        <sc-radio-item id="r2" value="comfortable">Comfortable</sc-radio-item>

        <sc-radio-item id="r3" value="compact">Compact</sc-radio-item>
      </sc-radio-group>
    </form>

    <br />
    <br />
    <br />
    <br />
    <br />

    {{ radioGroupForm.value | json }}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {
  radioGroupForm = new FormGroup({
    radio: new FormControl('compact'),
  });
}
