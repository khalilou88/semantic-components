import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PopoverDemoSection } from './popover-demo-section';

@Component({
  selector: 'app-popover-page',
  imports: [PopoverDemoSection],
  template: `
    <app-popover-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PopoverPage {}
