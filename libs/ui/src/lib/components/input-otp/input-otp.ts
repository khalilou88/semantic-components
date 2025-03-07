import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChildren,
  forwardRef,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

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
  readonly otpChange = output<string>();
  readonly length = input(6);

  private otpValue = '';

  ngAfterContentInit() {
    // Wait for content children to be initialized
    setTimeout(() => {
      this.setupDigitComponents();
    });
  }

  private setupDigitComponents() {
    const digitComponents = this.slots();
    if (!digitComponents || digitComponents.length === 0) {
      console.error('No OTP digit components found');
      return;
    }

    // Convert QueryList to array for easier manipulation
    const digits = digitComponents;

    // Set up focus management and value change handling
    digits.forEach((digit, index) => {
      // Subscribe to value changes
      digit.valueChange.subscribe((value: string) => {
        this.updateOtpValue();

        // Auto-focus next input when a digit is entered
        if (value && index < digits.length - 1) {
          digits[index + 1].focus();
        }
      });

      // Handle backspace - move focus to previous input
      digit.backspace.subscribe(() => {
        if (index > 0) {
          digits[index - 1].focus();
        }
      });

      // Handle paste event - distribute characters to subsequent inputs
      digit.paste.subscribe((remainingText: string) => {
        // Process the remaining pasted text
        this.handleMultiDigitPaste(remainingText, index + 1);
      });
    });

    // Set initial focus
    digits[0].focus();
  }

  private handleMultiDigitPaste(text: string, startIndex: number) {
    if (!text) return;

    const digits = this.slots();
    const chars = text.split('');

    // Fill the remaining inputs with the pasted characters
    chars.forEach((char, i) => {
      const targetIndex = startIndex + i;
      if (targetIndex < digits.length) {
        digits[targetIndex].setValue(char);
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
    }

    this.updateOtpValue();
  }

  private updateOtpValue() {
    this.otpValue = this.slots()
      .map((digit) => digit.value || '')
      .join('');

    this.otpChange.emit(this.otpValue);
  }

  // Public method to clear all inputs
  public clear() {
    this.slots().forEach((digit) => digit.clear());
    this.otpValue = '';
    this.otpChange.emit(this.otpValue);

    // Focus the first input
    const digits = this.slots();
    if (digits.length > 0) {
      digits[0].focus();
    }
  }

  // Public method to set OTP value programmatically
  public setValue(value: string) {
    if (!value) return;

    const digits = this.slots();
    const valueArray = value.split('');

    digits.forEach((digit, index) => {
      if (index < valueArray.length) {
        digit.setValue(valueArray[index]);
      } else {
        digit.clear();
      }
    });

    this.updateOtpValue();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(obj: any): void {
    this.otpValue = obj;
    this.changeDetectorRef.markForCheck();
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
    this.disabled.set(isDisabled);
  }
}
