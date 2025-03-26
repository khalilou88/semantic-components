import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScTooltip } from '@semantic-components/ui';

@Component({
  selector: 'app-tooltip-demo',
  imports: [ScTooltip, ScButton],
  template: `
    <div class="flex justify-center">
      <button sc-button variant="outline" scTooltip="Add to library">Hover</button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemo {}
