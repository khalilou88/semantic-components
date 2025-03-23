import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing-page'),
    title: 'Landing Page',
  },
  {
    path: 'docs',
    loadComponent: () => import('./layouts/doc-layout'),
    children: [
      {
        path: 'getting-started/introduction',
        loadComponent: () => import('./docs/getting-started/introduction/introduction-page'),
        title: 'Introduction Page',
      },
      {
        path: 'getting-started/installation',
        loadComponent: () => import('./docs/getting-started/installation/installation-page'),
        title: 'Installation Page',
      },
      {
        path: 'getting-started/typography',
        loadComponent: () => import('./docs/getting-started/typography/typography-page'),
        title: 'Typography Page',
      },
      {
        path: 'components/accordion',
        loadComponent: () => import('./docs/components/accordion/accordion-page'),
        title: 'Accordion Page',
      },
      {
        path: 'components/alert',
        loadComponent: () => import('./docs/components/alert/alert-page'),
        title: 'Alert Page',
      },
      {
        path: 'components/button',
        loadComponent: () => import('./docs/components/button/button-page'),
        title: 'Button Page',
      },
      {
        path: 'components/calendar',
        loadComponent: () => import('./docs/components/calendar/calendar-page'),
        title: 'Calendar Page',
      },
      {
        path: 'components/date-picker',
        loadComponent: () => import('./docs/components/date-picker/date-picker-page'),
        title: 'Date Picker Page',
      },
      {
        path: 'components/editor',
        loadComponent: () => import('./docs/components/editor/editor-page'),
        title: 'Editor Page',
      },
      {
        path: 'components/table',
        loadComponent: () => import('./docs/components/table/table-page'),
        title: 'Table Page',
      },
    ],
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    // Wildcard route for a 404 page
    path: '**',
    loadComponent: () => import('./landing/landing-page'),
    title: '404 Not Found Page',
  },
];
