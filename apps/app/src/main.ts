import { bootstrapApplication } from '@angular/platform-browser';

import { AppRoot } from './app/app-root';
import { appConfig } from './app/app.config';

bootstrapApplication(AppRoot, appConfig).catch((err) => console.error(err));
