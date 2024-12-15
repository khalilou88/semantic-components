import { inject } from '@angular/core';

import { ScTheme } from './theme';

export function scThemeProvider() {
  return () => inject(ScTheme).init();
}
