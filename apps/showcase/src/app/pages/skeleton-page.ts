import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSkeleton } from '@semantic-components/ui';

@Component({
  selector: 'app-skeleton-page',
  imports: [ScSkeleton],
  template: `
    <p>skeleton-page works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkeletonPage {}
