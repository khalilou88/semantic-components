import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ReCaptchaDemoSection } from './re-captcha-demo-section';

@Component({
  selector: 'app-re-captcha-page',
  imports: [ReCaptchaDemoSection],
  template: `
    <app-re-captcha-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaPage {}
