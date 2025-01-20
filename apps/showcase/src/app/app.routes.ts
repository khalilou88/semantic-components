import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/stacked-layout'),
    children: [
      {
        path: '',
        loadComponent: () => import('./layouts/footer-layout'),
        children: [
          {
            path: 'landing',
            loadComponent: () => import('./pages/landing-page'),
            title: 'Landing Page',
          },
        ],
      },
    ],
  },
  {
    path: 'components',
    loadComponent: () => import('./layouts/sidebar-layout'),
    children: [
      {
        path: '',
        loadComponent: () => import('./layouts/footer-layout'),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/components-page'),
            title: 'Components Page',
          },
          {
            path: 'cookie-consent',
            loadComponent: () => import('./pages/cookie-consent-page'),
            title: 'Cookie Consent Page',
          },
          {
            path: 'alert-dialog',
            loadComponent: () => import('./pages/alert-dialog-page'),
            title: 'Alert Dialog Page',
          },
          {
            path: 'confirmation-dialog',
            loadComponent: () => import('./pages/confirmation-dialog-page'),
            title: 'Confirmation Dialog Page',
          },
          {
            path: 'home',
            loadComponent: () => import('./pages/home-page'),
            title: 'Home Page',
          },
          {
            path: 'checkbox-group',
            loadComponent: () => import('./pages/checkbox-group-page'),
            title: 'Checkbox Group Page',
          },
          {
            path: 're-captcha-v3',
            loadComponent: () => import('./pages/re-captcha-v3-page'),
            title: 're-captcha-v3 Page',
          },
          {
            path: 're-captcha-v2',
            loadComponent: () => import('./pages/re-captcha-v2-page'),
            title: 're-captcha-v2 Page',
          },
          {
            path: 'menu-bar',
            loadComponent: () => import('./pages/menu-bar-page'),
            title: 'Menu Bar Page',
          },
          {
            path: 'collapsible',
            loadComponent: () => import('./pages/collapsible-page'),
            title: 'Collapsible Page',
          },
          {
            path: 'command',
            loadComponent: () => import('./pages/command-page'),
            title: 'Command Page',
          },
          {
            path: 'context-menu',
            loadComponent: () => import('./pages/context-menu-page'),
            title: 'Context Menu Page',
          },
          {
            path: 'popover',
            loadComponent: () => import('./pages/popover-page'),
            title: 'Popover Page',
          },
          {
            path: 'table',
            loadComponent: () => import('./pages/table-page'),
            title: 'Table Page',
          },
          {
            path: 'data-table',
            loadComponent: () => import('./pages/data-table-page'),
            title: 'Data Table Page',
          },
          {
            path: 'skeleton',
            loadComponent: () => import('./pages/skeleton-page'),
            title: 'Skeleton Page',
          },
          {
            path: 'alert',
            loadComponent: () => import('./pages/alert-page'),
            title: 'Alert Page',
          },
          {
            path: 'aspect-ratio',
            loadComponent: () => import('./pages/aspect-ratio-page'),
            title: 'Aspect Ratio Page',
          },
          {
            path: 'hover-card',
            loadComponent: () => import('./pages/hover-card-page'),
            title: 'Hover Card Page',
          },
          {
            path: 'input-password',
            loadComponent: () => import('./pages/input-password-page'),
            title: 'Input Password Page',
          },
          {
            path: 'input-otp',
            loadComponent: () => import('./pages/input-otp-page'),
            title: 'Input OTP Page',
          },
          {
            path: 'radio-group',
            loadComponent: () => import('./pages/radio-group-page'),
            title: 'Radio Group Page',
          },
          {
            path: 'switch',
            loadComponent: () => import('./pages/switch-page'),
            title: 'Switch Page',
          },
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
          {
            path: 'toast',
            loadComponent: () => import('./pages/toast-page'),
            title: 'Toast Page',
          },
          {
            path: 'menu',
            loadComponent: () => import('./pages/menu-page'),
            title: 'Menu Page',
          },
          {
            path: 'card',
            loadComponent: () => import('./pages/card-page'),
            title: 'Card Page',
          },
          {
            path: 'tabs',
            loadComponent: () => import('./pages/tabs-page'),
            title: 'Tabs Page',
          },
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
            path: 'button-showcase',
            loadComponent: () => import('./pages/button-showcase'),
            title: 'Button Showcase Page',
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
            path: 'time-picker',
            loadComponent: () => import('./pages/time-picker-page'),
            title: 'Time Picker Page',
          },
          {
            path: 'sidebar',
            loadComponent: () => import('./pages/sidebar-page'),
            title: 'Sidebar Page',
          },
          {
            path: 'file-upload',
            loadComponent: () => import('./pages/file-upload-page'),
            title: 'File Upload Page',
          },
          {
            path: 'separator',
            loadComponent: () => import('./pages/separator-page'),
            title: 'Separator Page',
          },
          {
            path: 'sheet',
            loadComponent: () => import('./pages/sheet-page'),
            title: 'Sheet Page',
          },
          {
            path: 'autocomplete',
            loadComponent: () => import('./pages/autocomplete-page'),
            title: 'Autocomplete Page',
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
            path: 'calendar',
            loadComponent: () => import('./pages/calendar-page'),
            title: 'Calendar Page',
          },
          {
            path: 'full-calendar',
            loadComponent: () => import('./pages/full-calendar-page'),
            title: 'Full Calendar Page',
          },
          {
            path: 'date-picker',
            loadComponent: () => import('./pages/date-picker-page'),
            title: 'Date Picker Page',
          },
          {
            path: 'colors',
            loadComponent: () => import('./pages/colors-page'),
            title: 'Colors Page',
          },
          {
            path: 'theme-toggler',
            loadComponent: () => import('./pages/theme-toggler-page'),
            title: 'Theme Toggler Page',
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
