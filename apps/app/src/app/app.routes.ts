import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'landing',
    loadComponent: () => import('./landing/page'),
    title: 'Landing Page',
  },
  {
    path: 'docs',
    loadComponent: () => import('./layouts/doc-layout'),
    children: [
      {
        path: 'introduction',
        loadComponent: () => import('./introduction/page'),
        title: 'Introduction Page',
      },
      {
        path: 'music-player',
        loadComponent: () => import('./music-player/page'),
        title: 'Music Player Page',
      },
    ],
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    // Wildcard route for a 404 page
    path: '**',
    loadComponent: () => import('./landing/page'),
    title: '404 Not Found Page',
  },
];
