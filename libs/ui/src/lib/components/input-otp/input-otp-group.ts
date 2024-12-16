import { NumberInput } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  numberAttribute,
} from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '../../utils';

@Component({
  selector: 'sc-input-otp-group',
  imports: [ReactiveFormsModule],
  template: `
    @for (input of inputs().controls; track $index) {
      <input [formControl]="$any(input)" type="text" inputmode="numeric" />
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOTPGroup {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  size = input.required({ transform: numberAttribute });

  inputs = computed<FormArray>(() => {
    const arr = [];

    for (let i = 0; i < this.size(); i++) {
      arr.push(new FormControl(''));
    }

    return new FormArray(arr);
  });
}
