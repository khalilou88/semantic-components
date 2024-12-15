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
import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header, Footer],
  template: `
    <app-header />
    <router-outlet></router-outlet>
    <app-footer />
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
