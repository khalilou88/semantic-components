import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '../components/header';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header],
  template: `
    <app-header />

    <router-outlet></router-outlet>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
