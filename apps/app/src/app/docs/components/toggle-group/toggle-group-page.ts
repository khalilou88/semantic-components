import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToggleGroupDemoSection } from './toggle-group-demo-section';

@Component({
  selector: 'app-toggle-group-page',
  imports: [ToggleGroupDemoSection],
  template: `
    <app-toggle-group-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleGroupPage {}
