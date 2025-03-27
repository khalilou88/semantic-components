import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ProgressDemoSection } from './progress-demo-section';
import { ProgressIndeterminateStateSection } from './progress-indeterminate-state-section';

@Component({
  selector: 'app-progress-page',
  imports: [ProgressDemoSection, ProgressIndeterminateStateSection],
  template: `
    <app-progress-demo-section />

    <app-progress-indeterminate-state-section title="Indeterminate state" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressPage {}
