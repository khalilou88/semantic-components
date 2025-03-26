import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScTooltip } from '@semantic-components/ui';

@Component({
  selector: 'app-tooltip-position',
  imports: [ScTooltip, ScButton],
  template: `
    <div class="grid grid-cols-2 gap-2">
      <button sc-button variant="outline" scTooltip="Tooltip below" position="below">
        Tooltip below
      </button>

      <button sc-button variant="outline" scTooltip="Tooltip above" position="above">
        Tooltip above
      </button>

      <button sc-button variant="outline" scTooltip="Tooltip left" position="left">
        Tooltip left
      </button>

      <button sc-button variant="outline" scTooltip="Tooltip right" position="right">
        Tooltip right
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipPosition {}
