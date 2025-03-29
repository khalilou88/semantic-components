import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { MenuDemoSection } from './menu-demo-section';

@Component({
  selector: 'app-menu-page',
  imports: [MenuDemoSection],
  template: `
    <app-menu-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuPage {}
