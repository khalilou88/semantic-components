import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'introduction',
    loadComponent: () => import('./introduction/page'),
    title: 'Introduction Page',
  },
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  {
    // Wildcard route for a 404 page
    path: '**',
    loadComponent: () => import('./introduction/page'),
    title: '404 Not Found Page',
  },
];
