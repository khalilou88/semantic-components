import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import {
  SC_CHECKBOX_RE_CAPTCHA_SITE_KEY,
  SC_INVISIBLE_RE_CAPTCHA_SITE_KEY,
  SC_RE_CAPTCHA_LANGUAGE_CODE,
  SC_RE_CAPTCHA_SITE_KEY,
} from './re-captcha-config';

interface ScReCaptchaSettings {
  siteKey?: string;
  checkboxReCaptchaSiteKey?: string;
  invisibleReCaptchaSiteKey?: string;
  languageCode?: string;
}

export function provideScReCaptchaSettings(settings: ScReCaptchaSettings): EnvironmentProviders {
  const providers = [];

  if (settings.siteKey) {
    providers.push({
      provide: SC_RE_CAPTCHA_SITE_KEY,
      useValue: settings.siteKey,
    });
  }

  if (settings.checkboxReCaptchaSiteKey) {
    providers.push({
      provide: SC_CHECKBOX_RE_CAPTCHA_SITE_KEY,
      useValue: settings.checkboxReCaptchaSiteKey,
    });
  }

  if (settings.invisibleReCaptchaSiteKey) {
    providers.push({
      provide: SC_INVISIBLE_RE_CAPTCHA_SITE_KEY,
      useValue: settings.invisibleReCaptchaSiteKey,
    });
  }

  if (settings.languageCode) {
    providers.push({
      provide: SC_RE_CAPTCHA_LANGUAGE_CODE,
      useValue: settings.languageCode,
    });
  }

  return makeEnvironmentProviders(providers);
}
