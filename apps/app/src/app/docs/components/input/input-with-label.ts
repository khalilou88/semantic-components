import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-input-with-label',
  imports: [ScInput, ScLabel],
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label sc-label htmlFor="email">Email</label>
      <input id="email" sc-input type="email" placeholder="Email" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithLabel {}
