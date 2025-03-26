import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScAvatar,
  ScAvatarFallback,
  ScAvatarImage,
  ScButton,
  ScHoverCardTriggerFor,
} from '@semantic-components/ui';
import { SiCalendarDaysIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-hover-card-demo',
  imports: [
    ScButton,
    ScHoverCardTriggerFor,
    SiCalendarDaysIcon,
    ScAvatar,
    ScAvatarImage,
    ScAvatarFallback,
  ],
  template: `
    <button [scHoverCardTriggerFor]="templateForHoverCardTrigger" sc-button variant="link">
      &#64;nextjs
    </button>

    <ng-template #templateForHoverCardTrigger>
      <div class="flex justify-between space-x-4">
        <sc-avatar>
          <img src="https://github.com/vercel.png" alt="" sc-avatar-image />
          <div sc-avatar-fallback>VC</div>
        </sc-avatar>

        <div class="space-y-1">
          <h4 class="text-sm font-semibold">&#64;nextjs</h4>
          <p class="text-sm">The React Framework – created and maintained by &#64;vercel.</p>
          <div class="flex items-center pt-2">
            <svg class="mr-2 size-4 opacity-70" si-calendar-days-icon></svg>
            <span class="text-xs text-muted-foreground">Joined December 2021</span>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverCardDemo {}
