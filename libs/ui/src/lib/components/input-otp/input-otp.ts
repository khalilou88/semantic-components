import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
  viewChildren,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { cn } from '../../utils';
import { ScInputOTPSlot } from './input-otp-slot';

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

  formGroup = new FormGroup({
    inputs: new FormArray([]),
  });

  get inputs(): FormArray {
    return this.formGroup.get('inputs') as FormArray;
  }

  slots = viewChildren(ScInputOTPSlot);

  constructor() {
    for (let i = 0; i < this.slots().length; i++) {
      const control = new FormControl('', Validators.required);
      this.slots()[i].control = control;
      this.inputs.push(control);
    }
  }
}
