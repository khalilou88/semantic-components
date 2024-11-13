import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { TooltipPageComponent } from './pages/tooltip-page.component';
import { EditorPageComponent } from './pages/editor-page.component';
import { DatePickerPageComponent } from './pages/date-picker-page.component';
import { NavbarPageComponent } from './pages/navbar-page.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'tooltip', component: TooltipPageComponent },
  { path: 'editor', component: EditorPageComponent },
  { path: 'editor', component: EditorPageComponent },
  { path: 'navbar', component: NavbarPageComponent },
  { path: 'date-picker', component: DatePickerPageComponent },
];
