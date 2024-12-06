import { Route } from '@angular/router';

import ColorsPage from './pages/colors-page';
import DatePickerPage from './pages/date-picker-page';
import DropdownPage from './pages/dropdown-page';
import EditorPage from './pages/editor-page';
import HomePage from './pages/home-page';
import NavPage from './pages/nav-page';
import PaginatorPage from './pages/paginator-page';
import TooltipPage from './pages/tooltip-page';

export const appRoutes: Route[] = [
  { path: 'home', component: HomePage },
  { path: 'tooltip', component: TooltipPage },
  { path: 'editor', component: EditorPage },
  { path: 'paginator', component: PaginatorPage },
  { path: 'nav', component: NavPage },
  { path: 'date-picker', component: DatePickerPage },
  { path: 'dropdown', component: DropdownPage },
  { path: 'colors', component: ColorsPage },
];
