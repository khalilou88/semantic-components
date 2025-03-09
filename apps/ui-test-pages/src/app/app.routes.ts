import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'input-otp',
    loadComponent: () => import('./input-otp/page'),
    title: 'Input OTP Page',
  },
];
