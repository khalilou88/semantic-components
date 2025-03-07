import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { OtpInput } from '@semantic-components/ui';

@Component({
  selector: 'app-verification-page',
  imports: [OtpInput, CommonModule],
  template: `
    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Enter verification code</h2>
      <p class="text-gray-600 mb-6">We've sent a 6-digit code to your phone number</p>

      <sc-otp-input [length]="6" (otpCompleted)="onOtpCompleted($event)"></sc-otp-input>

      <div class="mt-4 p-3 bg-green-100 text-green-700 rounded-md" *ngIf="verificationComplete">
        Verification successful!
      </div>

      <div class="mt-6 flex justify-between items-center">
        <button
          class="text-blue-600 hover:text-blue-800 text-sm font-medium"
          *ngIf="!verificationComplete"
          (click)="resendCode()"
        >
          Resend code
        </button>

        <span class="text-sm text-gray-500" *ngIf="!verificationComplete">
          Expires in {{ timeLeft }} seconds
        </span>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerificationPage {
  verificationComplete = false;
  timeLeft = 60; // Initial countdown value
  private timer: any;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  onOtpCompleted(otp: string): void {
    console.log('Completed OTP:', otp);
    // Call your verification service here
    this.verifyOtp(otp);
  }

  verifyOtp(otp: string): void {
    // Simulate API call
    setTimeout(() => {
      // Mock successful verification
      this.verificationComplete = true;
      this.clearTimer();
    }, 1000);
  }

  resendCode(): void {
    // Implement your resend logic here
    console.log('Resending code...');
    this.timeLeft = 60;
    this.startTimer();
  }

  private startTimer(): void {
    this.clearTimer();
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.clearTimer();
      }
    }, 1000);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
