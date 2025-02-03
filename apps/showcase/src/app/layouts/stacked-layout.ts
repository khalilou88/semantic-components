import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../components/header';
import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-stacked-layout',
  imports: [RouterOutlet, Header],
  template: `
    <app-header />
    <router-outlet />
  `,
  host: {
    '(window:resize)': 'onResize($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StackedLayout implements AfterViewChecked {
  layoutState = inject(LayoutState);

  ngAfterViewChecked() {
    this.setScreenHeight();
  }

  public onResize(_: any): void {
    this.setScreenHeight();
  }

  setScreenHeight() {
    this.layoutState.screenHeight.set(window.innerHeight);
  }
}
