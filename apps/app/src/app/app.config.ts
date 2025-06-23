import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideScReCaptchaSettings } from '@semantic-components/re-captcha';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideScReCaptchaSettings({
      v2SiteKey: '6Ldl1bQqAAAAANUJsycemVBh6pMXSYAQeOIZyfV2',
      v3SiteKey: '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat',
      languageCode: 'en',
    }),
  ],
};
