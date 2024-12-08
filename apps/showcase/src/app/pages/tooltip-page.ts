import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScTooltip } from '@semantic-components/ui';

@Component({
  selector: 'app-tooltip-page',
  imports: [ScTooltip, ScButton],
  template: `
    <button sc-button variant="outline" scTooltip="Add to library">Hover</button>

    <br />
    <br />
    <br />
    <br />
    <br />

    <button sc-button variant="outline" scTooltip="Tooltip above" position="above">
      Tooltip above
    </button>

    <br />
    <br />
    <br />
    <br />
    <br />

    <button sc-button variant="outline" scTooltip="Tooltip left" position="left">
      Tooltip left
    </button>

    <br />
    <br />
    <br />
    <br />
    <br />

    <button sc-button variant="outline" scTooltip="Tooltip right" position="right">
      Tooltip right
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TooltipPage {}
