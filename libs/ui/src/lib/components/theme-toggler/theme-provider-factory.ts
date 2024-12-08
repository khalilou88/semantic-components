import { inject } from '@angular/core';

import { ScTheme } from './theme';

export function scThemeProviderFactory() {
  return () => inject(ScTheme).init();
}
