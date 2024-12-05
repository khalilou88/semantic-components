import { Route } from '@angular/router';

import { DatePickerPageComponent } from './pages/date-picker-page.component';
import { DropdownPageComponent } from './pages/dropdown-page.component';
import EditorPage from './pages/editor-page';
import { HomePageComponent } from './pages/home-page.component';
import { NavPageComponent } from './pages/nav-page.component';
import TooltipPage from './pages/tooltip-page';

export const appRoutes: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'tooltip', component: TooltipPage },
  { path: 'editor', component: EditorPage },
  { path: 'nav', component: NavPageComponent },
  { path: 'date-picker', component: DatePickerPageComponent },
  { path: 'dropdown', component: DropdownPageComponent },
];
