import { Route } from '@angular/router';

import { ScSidebarLayout } from '@semantic-components/ui';

import BreadcrumbPage from './pages/breadcrumb-page';
import ButtonPage from './pages/button-page';
import ColorsPage from './pages/colors-page';
import DatePickerPage from './pages/date-picker-page';
import DropdownPage from './pages/dropdown-page';
import EditorPage from './pages/editor-page';
import HomePage from './pages/home-page';
import NavPage from './pages/nav-page';
import NotFoundPage from './pages/not-found-page';
import PaginatorPage from './pages/paginator-page';
import ProgressPage from './pages/progress-page';
import SelectPage from './pages/select-page';
import ThemeTogglerPage from './pages/theme-toggler-page';
import TogglePage from './pages/toggle-page';
import TooltipPage from './pages/tooltip-page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ScSidebarLayout,
    children: [
      { path: 'home', component: HomePage, title: 'Home Page' },
      { path: 'tooltip', component: TooltipPage, title: 'Tooltip Page' },
      { path: 'editor', component: EditorPage, title: 'Editor Page' },
      { path: 'paginator', component: PaginatorPage, title: 'Paginator Page' },
      { path: 'button', component: ButtonPage, title: 'Button Page' },
      { path: 'toggle', component: TogglePage, title: 'Toggle Page' },
      { path: 'nav', component: NavPage, title: 'Nav Page' },
      { path: 'select', component: SelectPage, title: 'Select Page' },
      { path: 'breadcrumb', component: BreadcrumbPage, title: 'Breadcrumb Page' },
      { path: 'progress', component: ProgressPage, title: 'Progress Page' },
      { path: 'date-picker', component: DatePickerPage, title: 'DatePicker Page' },
      { path: 'dropdown', component: DropdownPage, title: 'Dropdown Page' },
      { path: 'colors', component: ColorsPage, title: 'Colors Page' },
      { path: 'theme-toggler', component: ThemeTogglerPage, title: 'ThemeToggler Page' },
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
      {
        path: '**',
        component: NotFoundPage,
        title: '404 Not Found Page',
      }, // Wildcard route for a 404 page
    ],
  },
];
