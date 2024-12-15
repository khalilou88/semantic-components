import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-stacked-layout',
  imports: [Sidebar, RouterModule, Footer, Header],
  template: `
    <app-header />

    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex min-h-screen">
        <app-sidebar />
        <div class="flex-1" [style.marginTop.px]="layoutState.headerHeight()">
          <router-outlet></router-outlet>
          <app-footer />
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout {
  layoutState = inject(LayoutState);

  ngAfterViewChecked() {
    this.setScreenHeight();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.setScreenHeight();
  }

  setScreenHeight() {
    this.layoutState.screenHeight.set(window.innerHeight);
  }
}
