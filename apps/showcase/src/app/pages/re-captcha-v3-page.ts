import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScReCaptchaV3 } from '@semantic-components/re-captcha';
import { ScButton } from '@semantic-components/ui';

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

  async executeReCaptcha() {
    const token = await this.scReCaptchaV3.execute('submit');
    console.log('Token:', token);
  }
}
