// import { provideHttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import {
  // APP_INITIALIZER,
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

// import { Router, Routes, provideRouter, withRouterConfig } from '@angular/router';

// import { DocumentationRoutesService } from './documentation/documentation-routes.service';
import { appRoutes } from './app.routes';

// // Default routes before JSON is loaded
// const initialRoutes: Routes = [
//   { path: '', redirectTo: '/docs', pathMatch: 'full' },
//   { path: '**', redirectTo: '/docs' },
// ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    provideHttpClient(),
    //   {
    //     provide: APP_INITIALIZER,
    //     useFactory: (docRoutesService: DocumentationRoutesService, router: Router) => {
    //       return async () => {
    //         const routes = await docRoutesService.loadRoutes();

    //         // Add default routes
    //         routes.push({ path: '', redirectTo: '/docs', pathMatch: 'full' });
    //         routes.push({ path: '**', redirectTo: '/docs' });

    //         // Reset router config with new routes
    //         router.resetConfig(routes);
    //       };
    //     },
    //     deps: [DocumentationRoutesService, Router],
    //     multi: true,
    //   },
    //   provideRouter(initialRoutes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
  ],
};
