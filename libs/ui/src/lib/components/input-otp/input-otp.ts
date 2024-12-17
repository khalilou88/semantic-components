import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  signal,
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
import { InputOtpHandler } from './input-otp-handler';
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
    InputOtpHandler,
  ],
})
export class ScInputOtp implements ControlValueAccessor {
  inputOtpHandler = inject(InputOtpHandler);

  private readonly _cdr = inject(ChangeDetectorRef);

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

  slots = contentChildren(ScInputOTPSlot, { descendants: true });

  constructor() {
    effect(() => {
      if (this.inputOtpHandler.inputIndex() !== -1) {
        console.log('this.inputOtpHandler.inputIndex()');
        console.log(this.inputOtpHandler.inputIndex());

        const index = this.inputOtpHandler.inputIndex();

        const currentSlot = this.slots()[index];
        currentSlot.isActive.set(false);

        const nextSlot = this.slots()[index + 1];
        nextSlot.isActive.set(true);
      }
    });

    afterNextRender(() => {
      for (let i = 0; i < this.slots().length; i++) {
        const slot = this.slots()[i];

        if (i === 0) {
          slot.isActive.set(true);
        }

        const formControl = new FormControl('', Validators.required);

        slot.index = i;
        slot.formControl.set(formControl);
        this.inputs.push(formControl);
      }
    });

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

    this.onChange(tel);
    this._cdr.markForCheck();
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
