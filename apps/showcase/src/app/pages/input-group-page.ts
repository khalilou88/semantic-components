import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInput, ScInputGroup } from '@semantic-components/ui';

@Component({
  selector: 'app-input-group-page',
  imports: [ScInputGroup, ScInput],
  template: `
    <div class="m-10">
      <sc-input-group>
        <input sc-input />
      </sc-input-group>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputGroupPage {}
