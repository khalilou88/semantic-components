import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScThemeToggler } from '@semantic-components/ui';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, ScThemeToggler],
  template: `
    <sc-theme-toggler />

    <router-outlet></router-outlet>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
