import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/page-layout'),
    children: [
      {
        path: 'landing',
        loadComponent: () => import('./pages/landing-page'),
        title: 'Landing Page',
      },
      {
        path: '',
        loadComponent: () => import('./layouts/stacked-layout'),
        children: [
          {
            path: 'alert-dialog',
            loadComponent: () => import('./pages/alert-dialog-page'),
            title: 'Alert Dialog Page',
          },
          { path: 'home', loadComponent: () => import('./pages/home-page'), title: 'Home Page' },
          {
            path: 'accordion',
            loadComponent: () => import('./pages/accordion-page'),
            title: 'Accordion Page',
          },
          {
            path: 'checkbox',
            loadComponent: () => import('./pages/checkbox-page'),
            title: 'Checkbox Page',
          },
          {
            path: 'carousel',
            loadComponent: () => import('./pages/carousel-page'),
            title: 'Carousel Page',
          },
          {
            path: 'slider',
            loadComponent: () => import('./pages/slider-page'),
            title: 'Slider Page',
          },
          { path: 'toast', loadComponent: () => import('./pages/toast-page'), title: 'Toast Page' },
          {
            path: 'dropdown-menu',
            loadComponent: () => import('./pages/dropdown-menu-page'),
            title: 'Dropdown Menu Page',
          },
          { path: 'card', loadComponent: () => import('./pages/card-page'), title: 'Card Page' },
          { path: 'tabs', loadComponent: () => import('./pages/tabs-page'), title: 'Tabs Page' },
          {
            path: 'typography',
            loadComponent: () => import('./pages/typography-page'),
            title: 'Typography Page',
          },
          {
            path: 'tooltip',
            loadComponent: () => import('./pages/tooltip-page'),
            title: 'Tooltip Page',
          },
          {
            path: 'editor',
            loadComponent: () => import('./pages/editor-page'),
            title: 'Editor Page',
          },
          {
            path: 'scroll-area',
            loadComponent: () => import('./pages/scroll-area-page'),
            title: 'Scroll area Page',
          },
          {
            path: 'paginator',
            loadComponent: () => import('./pages/paginator-page'),
            title: 'Paginator Page',
          },
          {
            path: 'button',
            loadComponent: () => import('./pages/button-page'),
            title: 'Button Page',
          },
          {
            path: 'toggle',
            loadComponent: () => import('./pages/toggle-page'),
            title: 'Toggle Page',
          },
          { path: 'nav', loadComponent: () => import('./pages/nav-page'), title: 'Nav Page' },
          {
            path: 'select',
            loadComponent: () => import('./pages/select-page'),
            title: 'Select Page',
          },
          {
            path: 'dialog',
            loadComponent: () => import('./pages/alert-dialog-page'),
            title: 'Sialog Page',
          },
          {
            path: 'breadcrumb',
            loadComponent: () => import('./pages/breadcrumb-page'),
            title: 'Breadcrumb Page',
          },
          {
            path: 'progress',
            loadComponent: () => import('./pages/progress-page'),
            title: 'Progress Page',
          },
          {
            path: 'date-picker',
            loadComponent: () => import('./pages/date-picker-page'),
            title: 'DatePicker Page',
          },
          {
            path: 'dropdown',
            loadComponent: () => import('./pages/dropdown-page'),
            title: 'Dropdown Page',
          },
          {
            path: 'colors',
            loadComponent: () => import('./pages/colors-page'),
            title: 'Colors Page',
          },
          {
            path: 'theme-toggler',
            loadComponent: () => import('./pages/theme-toggler-page'),
            title: 'ThemeToggler Page',
          },
          { path: '', redirectTo: '/landing', pathMatch: 'full' },
          {
            // Wildcard route for a 404 page
            path: '**',
            loadComponent: () => import('./pages/not-found-page'),
            title: '404 Not Found Page',
          },
        ],
      },
    ],
  },
];
