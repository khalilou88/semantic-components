import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InvisibleReCaptchaSection } from './invisible-re-captcha-section';
import { ReCaptchaDemoSection } from './re-captcha-demo-section';
import { ReCaptchaWithResetSection } from './re-captcha-with-reset-section';
import { ScoreReCaptchaSection } from './score-re-captcha-section';

@Component({
  selector: 'app-re-captcha-page',
  imports: [
    ReCaptchaDemoSection,
    ReCaptchaWithResetSection,
    InvisibleReCaptchaSection,
    ScoreReCaptchaSection,
  ],
  template: `
    <app-re-captcha-demo-section />

    <app-re-captcha-with-reset-section />

    <app-invisible-re-captcha-section />

    <app-score-re-captcha-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaPage {}
