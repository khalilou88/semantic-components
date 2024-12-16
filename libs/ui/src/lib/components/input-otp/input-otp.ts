import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '../../utils';

@Component({
  selector: 'sc-input-otp',
  imports: [ReactiveFormsModule],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOtp {
  class = input<string>('');

  classes = computed(() => cn('flex items-center gap-2 has-[:disabled]:opacity-50', this.class()));

  size = input.required({ transform: numberAttribute });

  readonly _required = input<boolean, unknown>(false, {
    alias: 'required',
    transform: booleanAttribute,
  });

  inputs = computed<FormArray>(() => {
    const arr = [];

    for (let i = 0; i < this.size(); i++) {
      arr.push(new FormControl(''));
    }

    return new FormArray(arr);
  });
}
