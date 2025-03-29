import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-input-file',
  imports: [ScInput, ScLabel],
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label sc-label for="picture">Picture</label>
      <input id="picture" sc-input type="file" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFile {}
