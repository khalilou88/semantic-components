import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { MenuBarDemoSection } from './menu-bar-demo-section';

@Component({
  selector: 'app-menu-bar-page',
  imports: [MenuBarDemoSection],
  template: `
    <app-menu-bar-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuBarPage {}
