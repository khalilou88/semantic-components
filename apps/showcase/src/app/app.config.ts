import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideScReCaptchaSettings } from '@semantic-components/re-captcha';
import { scThemeProvider } from '@semantic-components/ui';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideAppInitializer(scThemeProvider()),
    provideScReCaptchaSettings({
      siteKey: '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat',
      languageCode: 'en',
    }),
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
};
