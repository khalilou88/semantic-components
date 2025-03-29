import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-input-demo',
  imports: [ScInput],
  template: `
    <input sc-input type="email" placeholder="Email" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemo {}
