import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InputOtpDemo } from './input-otp-demo';

@Component({
  selector: 'app-input-otp-demo-section',
  imports: [InputOtpDemo],
  template: `
    <app-input-otp-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOtpDemoSection {}
