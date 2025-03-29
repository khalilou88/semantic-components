import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-input-with-button',
  imports: [ScInput, ScButton],
  template: `
    <div class="flex w-full max-w-sm items-center space-x-2">
      <input sc-input type="email" placeholder="Email" />
      <button sc-button type="submit">Subscribe</button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithButton {}
