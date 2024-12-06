import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { scThemeProviderFactory } from '@semantic-components/ui';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAppInitializer(scThemeProviderFactory()),
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
};
