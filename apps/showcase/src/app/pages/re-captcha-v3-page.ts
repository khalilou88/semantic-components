import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScReCaptcha } from '@semantic-components/re-captcha';
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
  private readonly scReCaptcha = inject(ScReCaptcha);

  async executeReCaptcha() {
    const token = await this.scReCaptcha.execute('submit');
    console.log('Token:', token);
  }
}
