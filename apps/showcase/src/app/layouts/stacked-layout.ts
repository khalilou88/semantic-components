import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScSidebarContainer } from '@semantic-components/ui';

import { Header } from '../components/header';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header, ScSidebarContainer],
  template: `
    <sc-sidebar-container>
      <main class="w-full bg-background">
        <app-header />
        <div class="mt-10">
          <router-outlet></router-outlet>
        </div>
      </main>
    </sc-sidebar-container>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {}
