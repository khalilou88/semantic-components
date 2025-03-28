import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ScInputOTPGroup,
  ScInputOTPSeparator,
  ScInputOTPSlot,
  ScInputOtp,
} from '@semantic-components/ui';

@Component({
  selector: 'app-input-otp-demo',
  imports: [ScInputOTPGroup, ScInputOtp, ScInputOTPSeparator, ScInputOTPSlot, ReactiveFormsModule],
  template: `
    <form [formGroup]="inputOtpGroupForm">
      <sc-input-otp formControlName="otp">
        <sc-input-otp-group>
          <sc-input-otp-slot />
          <sc-input-otp-slot />
          <sc-input-otp-slot />
        </sc-input-otp-group>
        <sc-input-otp-separator />
        <sc-input-otp-group>
          <sc-input-otp-slot />
          <sc-input-otp-slot />
          <sc-input-otp-slot />
        </sc-input-otp-group>
      </sc-input-otp>
    </form>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOtpDemo {
  readonly inputOtpGroupForm = new FormGroup({
    otp: new FormControl(''),
  });
}
