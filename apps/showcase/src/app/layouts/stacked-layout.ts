import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '../components/header';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header],
  template: `
    <app-header />
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
