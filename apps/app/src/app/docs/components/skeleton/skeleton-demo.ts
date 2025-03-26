import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSkeleton } from '@semantic-components/ui';

@Component({
  selector: 'app-skeleton-demo',
  imports: [ScSkeleton],
  template: `
    <div class="flex items-center space-x-4">
      <sc-skeleton class="size-12 rounded-full" />
      <div class="space-y-2">
        <sc-skeleton class="h-4 w-[250px]" />
        <sc-skeleton class="h-4 w-[200px]" />
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonDemo {}
