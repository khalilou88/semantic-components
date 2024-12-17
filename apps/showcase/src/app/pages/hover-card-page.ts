import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScHoverCardTrigger } from '@semantic-components/ui';

@Component({
  selector: 'app-hover-card-page',
  imports: [ScButton, ScHoverCardTrigger],
  template: `
    <div class="m-10">
      <button [scHoverCardTrigger]="templateForHoverCardTrigger" sc-button variant="link">
        &#64;nextjs
      </button>

      <ng-template #templateForHoverCardTrigger>
        <p>hover-card-page works!</p>
      </ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HoverCardPage {}
