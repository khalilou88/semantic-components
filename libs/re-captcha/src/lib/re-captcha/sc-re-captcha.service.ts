import { DOCUMENT } from '@angular/common';
import { Injectable, afterNextRender, inject } from '@angular/core';

import { SC_RE_CAPTCHA_LANGUAGE_CODE, SC_RE_CAPTCHA_SITE_KEY } from './re-captcha-config';
import { ScReCaptchaV2Base } from './re-captcha-v2-base';

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaService {
  private readonly document = inject<Document>(DOCUMENT);
  private readonly siteKey = inject<string>(SC_RE_CAPTCHA_SITE_KEY, { optional: true });
  private readonly languageCode = inject<string>(SC_RE_CAPTCHA_LANGUAGE_CODE, { optional: true });

  readonly scReCaptchaV2s: ScReCaptchaV2Base[] = [];

  constructor() {
    afterNextRender(() => {
      this.registerOnloadCallback();
      this.addScript();
    });
  }

  private addScript() {
    let scriptSrc = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback';

    if (this.siteKey) {
      scriptSrc += `&render=${this.siteKey}`;
    } else {
      scriptSrc += '&render=explicit';
    }

    if (this.languageCode) {
      scriptSrc += `&hl=${this.languageCode}`;
    }

    const script = this.document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    this.document.body.appendChild(script);
  }

  private registerOnloadCallback() {
    (window as any).onloadCallback = () => {
      for (const scReCaptchaV2 of this.scReCaptchaV2s) {
        scReCaptchaV2.render();
      }
    };
  }
}
