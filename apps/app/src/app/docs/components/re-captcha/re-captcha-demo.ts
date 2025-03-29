import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckboxReCaptcha } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-re-captcha-demo',
  imports: [ScCheckboxReCaptcha],
  template: `
    <div [siteKey]="siteKey" sc-checkbox-re-captcha theme="dark"></div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReCaptchaDemo {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';
}
