import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSkeleton } from '@semantic-components/ui';

@Component({
  selector: 'app-skeleton-page',
  imports: [ScSkeleton],
  template: `
    <div class="flex items-center space-x-4">
      <div class="h-12 w-12 rounded-full" sc-skeleton></div>
      <div class="space-y-2">
        <div class="h-4 w-[250px]" sc-skeleton></div>
        <div class="h-4 w-[200px]" sc-skeleton></div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkeletonPage {}
