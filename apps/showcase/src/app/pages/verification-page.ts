import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { OtpInput, OtpInputSlot } from '@semantic-components/ui';

@Component({
  selector: 'app-verification-page',
  imports: [OtpInput, CommonModule, OtpInputSlot],
  template: `
    <div class="max-w-lg mx-auto p-6 text-center">
      <h2 class="text-xl font-semibold mb-4">Enter Verification Code</h2>

      <sc-otp-input #otpInput (otpChange)="onOtpChange($event)">
        <sc-otp-input-slot *ngFor="let _ of [0, 1, 2, 3, 4, 5]"></sc-otp-input-slot>
      </sc-otp-input>

      <div class="mt-6 flex gap-4 justify-center">
        <button
          class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
          (click)="clearOtp()"
        >
          Clear
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!isOtpComplete"
          (click)="verifyOtp()"
        >
          Verify
        </button>
      </div>

      <div class="mt-4 text-gray-600" *ngIf="otpValue">Current OTP value: {{ otpValue }}</div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerificationPage {
  @ViewChild('otpInput') otpInput!: OtpInput;

  otpValue = '';
  isOtpComplete = false;

  onOtpChange(otp: string) {
    this.otpValue = otp;
    this.isOtpComplete = otp.length === 6;
  }

  clearOtp() {
    this.otpInput.clear();
    this.otpValue = '';
    this.isOtpComplete = false;
  }

  verifyOtp() {
    if (this.isOtpComplete) {
      console.log('Verifying OTP:', this.otpValue);
      // Add verification logic here
    }
  }
}
