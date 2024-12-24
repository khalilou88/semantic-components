import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '../components/header';
import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterModule, Header],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout implements AfterViewChecked {
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
