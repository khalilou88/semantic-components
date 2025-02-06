import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput, ScInputGroup } from '@semantic-components/ui';
import { SiCircleHelpIcon, SiDollarSignIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-input-group-page',
  imports: [ScInputGroup, ScInput, SiDollarSignIcon, SiCircleHelpIcon],
  template: `
    <div class="m-10">
      <sc-input-group>
        <svg si-dollar-sign-icon></svg>
        <input sc-input />
        <svg si-circle-help-icon></svg>
      </sc-input-group>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputGroupPage {}
