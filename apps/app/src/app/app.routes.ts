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
        path: 'getting-started/introduction',
        loadComponent: () => import('./docs/getting-started/introduction/page'),
        title: 'Introduction Page',
      },
      {
        path: 'getting-started/typography',
        loadComponent: () => import('./docs/getting-started/typography/page'),
        title: 'Typography Page',
      },
      {
        path: 'components/button',
        loadComponent: () => import('./docs/components/button/page'),
        title: 'Button Page',
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
