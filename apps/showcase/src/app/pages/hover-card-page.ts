import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAvatar, ScButton, ScHoverCardTriggerFor } from '@semantic-components/ui';
import { SvgCalendarDaysIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-hover-card-page',
  imports: [ScButton, ScHoverCardTriggerFor, SvgCalendarDaysIcon, ScAvatar],
  template: `
    <div class="m-10">
      <button [scHoverCardTriggerFor]="templateForHoverCardTrigger" sc-button variant="link">
        &#64;nextjs
      </button>

      <ng-template #templateForHoverCardTrigger>
        <div class="flex justify-between space-x-4">
          <sc-avatar src="https://github.com/vercel.png" fallback="VC" />
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">&#64;nextjs</h4>
            <p class="text-sm">The React Framework – created and maintained by &#64;vercel.</p>
            <div class="flex items-center pt-2">
              <svg-calendar-days-icon class="mr-2 size-4 opacity-70" />
              <span class="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HoverCardPage {}
