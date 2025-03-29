import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-input-disabled',
  imports: [ScInput],
  template: `
    <input sc-input disabled type="email" placeholder="Email" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDisabled {}
