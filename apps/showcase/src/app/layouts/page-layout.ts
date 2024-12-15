import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Sidebar } from '../components/sidebar';

@Component({
  selector: 'app-page-layout',
  imports: [Sidebar, RouterModule],
  template: `
    <div class="grid grid-cols-5 grid-rows-1 gap-4">
      <app-sidebar />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageLayout {}
