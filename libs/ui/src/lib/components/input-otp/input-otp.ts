import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';

import { cn } from '@semantic-components/utils';

import { ScInputOTPSlot } from './input-otp-slot';

@Component({
  selector: 'sc-input-otp',
  imports: [ReactiveFormsModule],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScInputOtp),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ScInputOtp),
      multi: true,
    },
  ],
})
export class ScInputOtp implements AfterContentInit, ControlValueAccessor {
  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  protected readonly disabled = linkedSignal(() => this.disabledInput());

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('flex items-center gap-2 has-[:disabled]:opacity-50', this.classInput()),
  );

  readonly slots = contentChildren(ScInputOTPSlot, { descendants: true });

  readonly currentIndex = signal(0);

  readonly value = model('');

  constructor() {
    effect(() => {
      if (this.slots()) {
        this.slots().forEach((slot) => {
          slot.disabled.set(this.disabled());
        });
      }
    });
  }

  ngAfterContentInit() {
    // Wait for content children to be initialized
    setTimeout(() => {
      this.setupDigitComponents();
    });
  }

  setCurrentIndex(index: number) {
    if (index !== this.currentIndex()) {
      this.currentIndex.set(index);

      // Add visual indication to the currently active digit
      this.slots().forEach((digit, i) => {
        digit.isActive.set(i === index);
      });
    }
  }

  getCurrentIndex(): number {
    return this.currentIndex();
  }

  onClick() {
    this.slots()[this.currentIndex()].isActive.set(true);
    this.slots()[this.currentIndex()].focus();
  }

  private setupDigitComponents() {
    const digits = this.slots();

    if (!digits || digits.length === 0) {
      console.error('No OTP digit components found');
      return;
    }

    // Set up focus management and value change handling
    digits.forEach((digit, index) => {
      // Subscribe to value changes
      digit.valueChange.subscribe((value: string) => {
        this.updateOtpValue();
        this.onTouched();

        // Auto-focus next input when a digit is entered
        if (value && index < digits.length - 1) {
          digits[index].isActive.set(false);
          digits[index + 1].isActive.set(true);
          digits[index + 1].focus();
          this.currentIndex.set(index + 1);
        }
      });

      // Handle backspace - move focus to previous input
      digit.backspace.subscribe(() => {
        if (index > 0) {
          digits[index].isActive.set(false);
          digits[index - 1].isActive.set(true);
          digits[index - 1].focus();
          this.currentIndex.set(index - 1);
          this.onTouched();
        }
      });

      // Handle paste event - distribute characters to subsequent inputs
      digit.paste.subscribe((remainingText: string) => {
        // Process the remaining pasted text
        this.handleMultiDigitPaste(remainingText, index + 1);
        this.onTouched();
      });
    });

    // Set initial focus if not disabled
    if (!this.disabled()) {
      const d = this.getLastNotEmptyElement();
      d.isActive.set(true);
      d.focus();
    }
  }

  private getLastNotEmptyElement() {
    const arr = this.slots();
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].value()) {
        this.currentIndex.set(i);
        return arr[i];
      }
    }

    this.currentIndex.set(0);
    return arr[0];
  }

  private handleMultiDigitPaste(text: string, startIndex: number) {
    if (!text) return;

    const digits = this.slots();
    const chars = text.split('');

    // Fill the remaining inputs with the pasted characters
    chars.forEach((char, i) => {
      const targetIndex = startIndex + i;
      if (targetIndex < digits.length) {
        digits[targetIndex].value.set(char);
      }
    });

    // Focus the next empty input or the last input if all are filled
    const nextEmptyIndex = digits.findIndex(
      (digit, index) => index >= startIndex + chars.length && !digit.value,
    );
    if (nextEmptyIndex !== -1) {
      digits[nextEmptyIndex].focus();
    } else if (startIndex + chars.length < digits.length) {
      digits[startIndex + chars.length].focus();
    } else {
      // All digits filled, focus the last one
      digits[digits.length - 1].focus();
      this.currentIndex.set(digits.length - 1);
    }

    this.updateOtpValue();
  }

  private updateOtpValue() {
    // Check if OTP is complete
    // const isComplete = this.slots().every((digit) => digit.value);
    // if (isComplete) {
    // }

    const value = this.slots()
      .map((digit) => digit.value || '')
      .join('');

    this.value.set(value);

    this.onChange(value);
  }

  // Validator implementation
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    // Check if the OTP is complete
    if (value.length < this.slots().length) {
      return { incomplete: true };
    }

    return null;
  }

  // Public method to clear all inputs
  public clear() {
    if (this.slots()) {
      this.slots().forEach((digit) => digit.value.set(''));
      this.value.set('');
      this.onChange(this.value);

      if (this.slots().length > 0 && !this.disabled()) {
        this.slots()[0].focus();
        this.currentIndex.set(0);
      }
    }
  }

  // Public method to set OTP value programmatically
  public setValue(value: string) {
    if (!value || !this.slots()) return;

    const valueArray = value.split('');

    this.slots().forEach((digit, index) => {
      if (index < valueArray.length) {
        digit.value.set(valueArray[index]);
      } else {
        digit.value.set('');
      }
    });

    this.updateOtpValue();
  }

  writeValue(value: string): void {
    if (!value) {
      this.clear();
      return;
    }

    this.setValue(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
