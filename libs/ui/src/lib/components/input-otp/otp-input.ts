import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OtpInputSlot } from './otp-input-slot';

@Component({
  selector: 'sc-otp-input',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  template: `
    <div class="flex items-center gap-2">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInput implements AfterContentInit {
  @ContentChildren(OtpInputSlot) digitComponents!: QueryList<OtpInputSlot>;
  @Output() otpChange = new EventEmitter<string>();
  @Input() length = 6;

  private otpValue = '';

  ngAfterContentInit() {
    // Wait for content children to be initialized
    setTimeout(() => {
      this.setupDigitComponents();
    });
  }

  private setupDigitComponents() {
    if (!this.digitComponents || this.digitComponents.length === 0) {
      console.error('No OTP digit components found');
      return;
    }

    // Convert QueryList to array for easier manipulation
    const digits = this.digitComponents.toArray();

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

    const digits = this.digitComponents.toArray();
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
    this.otpValue = this.digitComponents.map((digit) => digit.value || '').join('');

    this.otpChange.emit(this.otpValue);
  }

  // Public method to clear all inputs
  public clear() {
    this.digitComponents.forEach((digit) => digit.clear());
    this.otpValue = '';
    this.otpChange.emit(this.otpValue);

    // Focus the first input
    const digits = this.digitComponents.toArray();
    if (digits.length > 0) {
      digits[0].focus();
    }
  }

  // Public method to set OTP value programmatically
  public setValue(value: string) {
    if (!value) return;

    const digits = this.digitComponents.toArray();
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
}
