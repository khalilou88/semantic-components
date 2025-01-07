import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScReCaptchaV3 } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v3-page',
  imports: [ScReCaptchaV3],
  template: `
    <div class="m-10">
      <sc-re-captcha-v3 [siteKey]="siteKey" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaV3Page {
  siteKey = '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat';
}
