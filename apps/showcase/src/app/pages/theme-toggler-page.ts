import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScThemeToggler } from '@semantic-components/ui';

@Component({
  selector: 'app-theme-toggler-page',
  imports: [ScThemeToggler],
  template: `
    <sc-theme-toggler />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemeTogglerPage {}
