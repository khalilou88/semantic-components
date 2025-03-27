import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToggleDemoSection } from './toggle-demo-section';

@Component({
  selector: 'app-toggle-page',
  imports: [ToggleDemoSection],
  template: `
    <app-toggle-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TogglePage {}
