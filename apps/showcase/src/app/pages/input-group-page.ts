import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput, ScInputGroup } from '@semantic-components/ui';

@Component({
  selector: 'app-input-group-page',
  imports: [ScInputGroup, ScInput],
  template: `
    <sc-input-group>
      <input sc-input />
    </sc-input-group>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputGroupPage {}
