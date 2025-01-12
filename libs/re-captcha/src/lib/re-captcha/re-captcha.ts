import { Injectable, inject } from '@angular/core';

import { SC_RE_CAPTCHA_SITE_KEY } from './re-captcha-config';
import { ScReCaptchaService } from './sc-re-captcha.service';

declare let grecaptcha: any;

@Injectable({
  providedIn: 'root',
})
export class ScReCaptcha {
  private readonly siteKey = inject<string>(SC_RE_CAPTCHA_SITE_KEY);

  private readonly scReCaptchaService = inject(ScReCaptchaService);

  async execute(actionName: string): Promise<string> {
    return new Promise((resolve) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(this.siteKey, { action: actionName }).then((token: string) => {
          resolve(token);
        });
      });
    });
  }
}