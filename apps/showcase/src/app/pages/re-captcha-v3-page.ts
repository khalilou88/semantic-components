import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScButton, ScReCaptchaV3 } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v3-page',
  imports: [ScButton],
  template: `
    <div class="m-10">
      <button (click)="executeReCaptcha()" sc-button>Test captcha</button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaV3Page {
  private readonly scReCaptchaV3 = inject(ScReCaptchaV3);

  executeReCaptcha() {
    this.scReCaptchaV3.execute('submit');
  }
}
