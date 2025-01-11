import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, afterNextRender, inject } from '@angular/core';

import { SC_RE_CAPTCHA_LANGUAGE_CODE, SC_RE_CAPTCHA_SITE_KEY } from './re-captcha-config';
import { ScReCaptchaV2Base } from './re-captcha-v2-base';

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaService {
  private readonly injector = inject(Injector);
  private readonly document = inject<Document>(DOCUMENT);

  readonly scReCaptchaV2s: ScReCaptchaV2Base[] = [];

  constructor(
    @Inject(SC_RE_CAPTCHA_SITE_KEY) private readonly siteKey: string,
    @Inject(SC_RE_CAPTCHA_LANGUAGE_CODE) private readonly languageCode: string,
  ) {
    console.log('ScReCaptchaService.constructor()');
    this.registerOnloadCallback();
    this.addScript();
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
    afterNextRender(
      () => {
        (window as any).onloadCallback = () => {
          for (const scReCaptchaV2 of this.scReCaptchaV2s) {
            scReCaptchaV2.renderWidget();
          }
        };
      },
      { injector: this.injector },
    );
  }
}
