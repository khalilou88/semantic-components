import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import {
  SC_RE_CAPTCHA_LANGUAGE_CODE,
  SC_RE_CAPTCHA_V2_SITE_KEY,
  SC_RE_CAPTCHA_V3_SITE_KEY,
} from './re-captcha-config';

interface ScReCaptchaSettings {
  v2SiteKey?: string;
  v3SiteKey?: string;
  languageCode?: string;
}

export function provideScReCaptchaSettings(settings: ScReCaptchaSettings): EnvironmentProviders {
  const providers = [];

  if (settings.v2SiteKey) {
    providers.push({
      provide: SC_RE_CAPTCHA_V2_SITE_KEY,
      useValue: settings.v2SiteKey,
    });
  }

  if (settings.v3SiteKey) {
    providers.push({
      provide: SC_RE_CAPTCHA_V3_SITE_KEY,
      useValue: settings.v3SiteKey,
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
