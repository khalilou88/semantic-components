import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { DeferredEventPlugin } from '@semantic-components/event-manager';
import { provideScReCaptchaSettings } from '@semantic-components/re-captcha';
import { scThemeProvider } from '@semantic-components/ui';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAppInitializer(scThemeProvider()),
    provideScReCaptchaSettings({
      v2SiteKey: '6Ldl1bQqAAAAANUJsycemVBh6pMXSYAQeOIZyfV2',
      v3SiteKey: '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat',
      languageCode: 'en',
    }),
    {
      provide: EVENT_MANAGER_PLUGINS,
      multi: true,
      useClass: DeferredEventPlugin,
    },
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
};
