import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, inject } from '@angular/core';

declare let grecaptcha: any;

export const SC_RE_CAPTCHA_V3_SITE_KEY = new InjectionToken<string>('SC_RE_CAPTCHA_V3_SITE_KEY');

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaV3 {
  private readonly document = inject<Document>(DOCUMENT);

  constructor(@Inject(SC_RE_CAPTCHA_V3_SITE_KEY) private readonly siteKey: string) {
    this.addScript();
  }

  private addScript() {
    const script = this.document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.async = true;
    script.defer = true;
    this.document.body.appendChild(script);
  }

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
