import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScTouchArea } from '@semantic-components/ui';
import { SiCircleUserRoundIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-touch-area-page',
  imports: [ScButton, ScTouchArea, SiCircleUserRoundIcon],
  template: `
    <div class="m-10">
      <button class="relative" sc-button size="icon">
        <span sc-touch-area></span>
        <svg si-circle-user-round-icon></svg>
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TouchAreaPage {}
