import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Sidebar } from '../components/sidebar';

@Component({
  selector: 'app-page-layout',
  imports: [Sidebar, RouterModule],
  template: `
    <div class="container flex">
      <app-sidebar />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageLayout {}
