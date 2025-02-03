import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '../components/footer';

@Component({
  selector: 'app-footer-layout',
  imports: [RouterOutlet, Footer],
  template: `
    <router-outlet />
    <app-footer />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FooterLayout {
  class = signal<string>('block w-full');
}
