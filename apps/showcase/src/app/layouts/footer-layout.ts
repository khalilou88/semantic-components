import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Footer } from '../components/footer';

@Component({
  selector: 'app-footer-layout',
  imports: [RouterModule, Footer],
  template: `
    <router-outlet></router-outlet>
    <app-footer />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FooterLayout {}
