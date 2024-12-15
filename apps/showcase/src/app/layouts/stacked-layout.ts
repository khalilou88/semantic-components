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

    <div class="flex min-h-screen">
      <app-sidebar />
      <div class="mt-16 flex-1 bg-yellow-200">
        <router-outlet></router-outlet>
        <app-footer />
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
