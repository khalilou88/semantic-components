import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { SC_RE_CAPTCHA_LANGUAGE_CODE, SC_RE_CAPTCHA_SITE_KEY } from './re-captcha-config';

interface ScReCaptchaSettings {
  siteKey?: string;
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

  if (settings.languageCode) {
    providers.push({
      provide: SC_RE_CAPTCHA_LANGUAGE_CODE,
      useValue: settings.languageCode,
    });
  }

  return makeEnvironmentProviders(providers);
}
