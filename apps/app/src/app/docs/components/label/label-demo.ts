import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-label-demo',
  imports: [ScLabel, ScCheckbox],
  template: `
    <div class="flex items-center space-x-2">
      <input id="terms" sc-checkbox />
      <label sc-label for="terms">Accept terms and conditions</label>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelDemo {}
