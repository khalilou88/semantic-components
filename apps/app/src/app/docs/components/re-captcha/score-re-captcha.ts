import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScScoreReCaptcha } from '@semantic-components/re-captcha';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-score-re-captcha',
  imports: [ScButton],
  template: `
    <button (click)="executeReCaptcha()" sc-button>Execute score reCAPTCHA</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreReCaptcha {
  private readonly scReCaptcha = inject(ScScoreReCaptcha);

  async executeReCaptcha() {
    const token = await this.scReCaptcha.execute('submit');
    console.log('Token:', token);
  }
}
