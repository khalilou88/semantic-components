import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScInputNumber,
  ScInputNumberDecrementer,
  ScInputNumberGroup,
  ScInputNumberIncrementer,
} from '@semantic-components/ui';
import { SiMinusIcon, SiPlusIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-input-number-group-page',
  imports: [
    ScInputNumberGroup,
    ScInputNumberIncrementer,
    ScInputNumberDecrementer,
    SiPlusIcon,
    SiMinusIcon,
    ScInputNumber,
  ],
  template: `
    <div class="m-10">
      <div sc-input-number-group>
        <input sc-input-number />

        <button sc-input-number-decrementer>
          <svg si-minus-icon></svg>
        </button>
        <button sc-input-number-incrementer>
          <svg si-plus-icon></svg>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputNumberGroupPage {}
