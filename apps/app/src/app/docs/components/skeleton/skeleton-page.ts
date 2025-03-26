import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SkeletonCardSection } from './skeleton-card-section';
import { SkeletonDemoSection } from './skeleton-demo-section';

@Component({
  selector: 'app-skeleton-page',
  imports: [SkeletonDemoSection, SkeletonCardSection],
  template: `
    <app-skeleton-demo-section />

    <app-skeleton-card-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkeletonPage {}
