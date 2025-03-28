import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InputOtpDemoSection } from './input-otp-demo-section';

@Component({
  selector: 'app-input-otp-page',
  imports: [InputOtpDemoSection],
  template: `
    <app-input-otp-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOtpPage {}
