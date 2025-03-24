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
        path: 'components/alert-dialog',
        loadComponent: () => import('./docs/components/alert-dialog/alert-dialog-page'),
        title: 'Alert Dialog Page',
      },
      {
        path: 'components/aspect-ratio',
        loadComponent: () => import('./docs/components/aspect-ratio/aspect-ratio-page'),
        title: 'Aspect Ratio Page',
      },
      {
        path: 'components/avatar',
        loadComponent: () => import('./docs/components/avatar/avatar-page'),
        title: 'Avatar Page',
      },
      {
        path: 'components/button',
        loadComponent: () => import('./docs/components/button/button-page'),
        title: 'Button Page',
      },
      {
        path: 'components/badge',
        loadComponent: () => import('./docs/components/badge/badge-page'),
        title: 'Badge Page',
      },
      {
        path: 'components/breadcrumb',
        loadComponent: () => import('./docs/components/breadcrumb/breadcrumb-page'),
        title: 'Breadcrumb Page',
      },
      {
        path: 'components/calendar',
        loadComponent: () => import('./docs/components/calendar/calendar-page'),
        title: 'Calendar Page',
      },
      {
        path: 'components/card',
        loadComponent: () => import('./docs/components/card/card-page'),
        title: 'Card Page',
      },
      {
        path: 'components/carousel',
        loadComponent: () => import('./docs/components/carousel/carousel-page'),
        title: 'Carousel Page',
      },
      {
        path: 'components/chart',
        loadComponent: () => import('./docs/components/chart/chart-page'),
        title: 'Chart Page',
      },
      {
        path: 'components/checkbox',
        loadComponent: () => import('./docs/components/checkbox/checkbox-page'),
        title: 'Checkbox Page',
      },
      {
        path: 'components/checkbox-group',
        loadComponent: () => import('./docs/components/checkbox-group/checkbox-group-page'),
        title: 'Checkbox Group Page',
      },
      {
        path: 'components/collapsible',
        loadComponent: () => import('./docs/components/collapsible/collapsible-page'),
        title: 'Collapsible Page',
      },
      {
        path: 'components/date-picker',
        loadComponent: () => import('./docs/components/date-picker/date-picker-page'),
        title: 'Date Picker Page',
      },
      {
        path: 'components/dialog',
        loadComponent: () => import('./docs/components/dialog/dialog-page'),
        title: 'Dialog Page',
      },
      {
        path: 'components/editor',
        loadComponent: () => import('./docs/components/editor/editor-page'),
        title: 'Editor Page',
      },
      {
        path: 'components/slider',
        loadComponent: () => import('./docs/components/slider/slider-page'),
        title: 'Slider Page',
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
