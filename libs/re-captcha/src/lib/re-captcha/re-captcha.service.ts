import { DOCUMENT } from '@angular/common';
import { Injectable, afterNextRender, inject } from '@angular/core';

import { ScReCaptchaBase } from './re-captcha-base';
import { SC_RE_CAPTCHA_LANGUAGE_CODE, SC_RE_CAPTCHA_V3_SITE_KEY } from './re-captcha-config';

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaService {
  private readonly document = inject<Document>(DOCUMENT);
  private readonly v3SiteKey = inject<string>(SC_RE_CAPTCHA_V3_SITE_KEY, { optional: true });
  private readonly languageCode = inject<string>(SC_RE_CAPTCHA_LANGUAGE_CODE, { optional: true });

  readonly scReCaptchas: ScReCaptchaBase[] = [];

  constructor() {
    afterNextRender(() => {
      this.registerOnloadCallback();
      this.addScript();
    });
  }

  private addScript() {
    let scriptSrc = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback';

    if (this.v3SiteKey) {
      scriptSrc += `&render=${this.v3SiteKey}`;
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
      for (const scReCaptcha of this.scReCaptchas) {
        scReCaptcha.render();
      }
    };
  }
}
