import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ContextMenuDemoSection } from './context-menu-demo-section';

@Component({
  selector: 'app-context-menu-page',
  imports: [ContextMenuDemoSection],
  template: `
    <app-context-menu-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContextMenuPage {}
