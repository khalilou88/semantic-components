import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { TooltipPageComponent } from './pages/tooltip-page.component';
import { EditorPageComponent } from './pages/editor-page.component';
import { DatePickerPageComponent } from './pages/date-picker-page.component';
import { NavPageComponent } from './pages/nav-page.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'tooltip', component: TooltipPageComponent },
  { path: 'editor', component: EditorPageComponent },
  { path: 'editor', component: EditorPageComponent },
  { path: 'nav', component: NavPageComponent },
  { path: 'date-picker', component: DatePickerPageComponent },
];
