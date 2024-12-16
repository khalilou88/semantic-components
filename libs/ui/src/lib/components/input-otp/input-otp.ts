import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  input,
  model,
  numberAttribute,
  signal,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScInputOtp),
      multi: true,
    },
  ],
})
export class ScInputOtp implements ControlValueAccessor {
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.formGroup.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      const tel = this.formGroup.valid ? this.inputs.value.join('') : null;
      this._updateValue(tel);
    });
  }

  private _updateValue(tel: string | null) {
    // const current = this._value();
    // if (
    //   tel === current ||
    //   (tel?.area === current?.area &&
    //     tel?.exchange === current?.exchange &&
    //     tel?.subscriber === current?.subscriber)
    // ) {
    //   return;
    // }
    this._value.set(tel);
  }

  readonly _value = model<string | null>(null, { alias: 'value' });

  readonly _disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  private readonly _disabledByCva = signal(false);
  private readonly _disabled = computed(() => this._disabledByInput() || this._disabledByCva());

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  writeValue(tel: string | null): void {
    this._updateValue(tel);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabledByCva.set(isDisabled);
  }
}
