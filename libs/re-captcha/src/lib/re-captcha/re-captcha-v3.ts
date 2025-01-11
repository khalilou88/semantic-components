import { Inject, Injectable, InjectionToken, inject } from '@angular/core';

import { ScReCaptchaService } from './sc-re-captcha.service';

declare let grecaptcha: any;

export const SC_RE_CAPTCHA_V3_SITE_KEY = new InjectionToken<string>('SC_RE_CAPTCHA_V3_SITE_KEY');

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaV3 {
  private readonly scReCaptchaService = inject(ScReCaptchaService);

  constructor(@Inject(SC_RE_CAPTCHA_V3_SITE_KEY) private readonly siteKey: string) {}

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
