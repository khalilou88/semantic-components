import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

declare let grecaptcha: any;

//https://ben-5.azurewebsites.net/2024/9/5/google-recaptcha-v3-with-angular/

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaV3 {
  private siteKey: string | null = null;
  private loaded: boolean = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  load(siteKey: string): void {
    if (this.loaded) {
      return;
    }

    this.siteKey = siteKey;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;

    this.document.head.appendChild(script);

    this.loaded = true;
  }

  execute(action: string, callback: (token: string) => void): void {
    if (!this.siteKey) {
      throw new Error('Recaptcha site key is not set.');
    }

    grecaptcha.ready(() => {
      grecaptcha.execute(this.siteKey!, { action }).then(callback);
    });
  }
}
