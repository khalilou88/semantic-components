import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { RE_CAPTCHA_V3_SITE_KEY, scThemeProvider } from '@semantic-components/ui';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideAppInitializer(scThemeProvider()),
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: RE_CAPTCHA_V3_SITE_KEY, useValue: '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat' },
  ],
};
