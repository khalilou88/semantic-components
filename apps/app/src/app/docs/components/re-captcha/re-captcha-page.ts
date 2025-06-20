import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ReCaptchaDemoSection } from './re-captcha-demo-section';
import { ReCaptchaWithResetSection } from './re-captcha-with-reset-section';

@Component({
  selector: 'app-re-captcha-page',
  imports: [ReCaptchaDemoSection, ReCaptchaWithResetSection],
  template: `
    <app-re-captcha-demo-section />

    <app-re-captcha-with-reset-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaPage {}
