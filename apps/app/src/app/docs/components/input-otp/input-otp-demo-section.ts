import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { InputOtpDemo } from './input-otp-demo';

@Component({
  selector: 'app-input-otp-demo-section',
  imports: [PreviewCodeTabs, InputOtpDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-input-otp-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOtpDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
  template: \`
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
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOtpDemo {
  readonly inputOtpGroupForm = new FormGroup({
    otp: new FormControl(''),
  });
}`;
}
