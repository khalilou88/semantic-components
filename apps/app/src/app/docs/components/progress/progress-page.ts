import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ProgressDemoSection } from './progress-demo-section';

@Component({
  selector: 'app-progress-page',
  imports: [ProgressDemoSection],
  template: `
    <app-progress-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressPage {}
