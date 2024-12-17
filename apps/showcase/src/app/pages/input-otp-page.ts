import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldCustomControlComponent,
  ScInputOTPGroup,
  ScInputOTPSeparator,
  ScInputOTPSlot,
  ScInputOtp,
} from '@semantic-components/ui';

@Component({
  selector: 'app-input-otp-page',
  imports: [
    ScInputOTPGroup,
    ScInputOtp,
    ScInputOTPSeparator,
    ScInputOTPSlot,
    ReactiveFormsModule,
    JsonPipe,
    FormFieldCustomControlComponent,
  ],
  template: `
    <div class="m-10">
      <form [formGroup]="inputOtpGroupForm">
        <sc-input-otp size="6" formControlName="otp">
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

      <br />
      <br />
      <br />
      <br />
      {{ inputOtpGroupForm.value | json }}
      <br />
      <br />
      <br />

      <sc-form-field-custom-control />
      <br />

      <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
        <noscript></noscript>
        <div
          class="flex items-center gap-2 has-[:disabled]:opacity-50"
          data-input-otp-container="true"
          style="position: relative; cursor: text; user-select: none; pointer-events: none; --root-height: 40px;"
        >
          <div class="flex items-center">
            <div
              class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
            ></div>
            <div
              class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
            ></div>
            <div
              class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
            ></div>
          </div>
          <div role="separator">
            <svg
              class="lucide lucide-dot "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12.1" cy="12.1" r="1"></circle>
            </svg>
          </div>
          <div class="flex items-center">
            <div
              class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
            ></div>
            <div
              class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
            ></div>
            <div
              class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
            ></div>
          </div>
          <div style="position: absolute; inset: 0px; pointer-events: none;">
            <input
              class="disabled:cursor-not-allowed"
              autocomplete="one-time-code"
              data-input-otp="true"
              inputmode="numeric"
              pattern="^d+$"
              maxlength="6"
              value=""
              data-input-otp-mss="0"
              data-input-otp-mse="0"
              style="position: absolute; inset: 0px; width: calc(100% + 40px); height: 100%; display: flex; text-align: left; opacity: 1; color: transparent; pointer-events: all; background: transparent; caret-color: transparent; border: 0px solid transparent; outline: transparent solid 0px; box-shadow: none; line-height: 1; letter-spacing: -0.5em; font-size: var(--root-height); font-family: monospace; font-variant-numeric: tabular-nums; clip-path: inset(0px 40px 0px 0px);"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOtpPage {
  inputOtpGroupForm = new FormGroup({
    otp: new FormControl(''),
  });
}
