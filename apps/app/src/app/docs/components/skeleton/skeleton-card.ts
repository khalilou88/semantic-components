import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSkeleton } from '@semantic-components/ui';

@Component({
  selector: 'app-skeleton-card',
  imports: [ScSkeleton],
  template: `
    <div class="flex flex-col space-y-3">
      <sc-skeleton class="h-[125px] w-[250px] rounded-xl" />
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
export class SkeletonCard {}
