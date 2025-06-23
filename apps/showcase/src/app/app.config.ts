import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID, provideZonelessChangeDetection } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { DeferredEventPlugin } from '@semantic-components/event-manager';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideHttpClient(withFetch()),
    {
      provide: EVENT_MANAGER_PLUGINS,
      multi: true,
      useClass: DeferredEventPlugin,
    },
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
};
