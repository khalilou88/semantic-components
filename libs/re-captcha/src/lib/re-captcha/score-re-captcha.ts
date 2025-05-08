import { Injectable, afterNextRender, inject } from '@angular/core';

import { SC_RE_CAPTCHA_V3_SITE_KEY } from './re-captcha-config';
import { ScReCaptchaService } from './re-captcha.service';

declare let grecaptcha: any;

@Injectable({
  providedIn: 'root',
})
export class ScScoreReCaptcha {
  private readonly v3SiteKey = inject<string>(SC_RE_CAPTCHA_V3_SITE_KEY);

  private readonly scReCaptchaService = inject(ScReCaptchaService);

  constructor() {
    afterNextRender(async () => {
      await this.scReCaptchaService.loadScript();
    });
  }

  async execute(actionName: string): Promise<string> {
    return new Promise((resolve) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(this.v3SiteKey, { action: actionName }).then((token: string) => {
          resolve(token);
        });
      });
    });
  }
}
