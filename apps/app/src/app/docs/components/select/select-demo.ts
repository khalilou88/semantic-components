import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScOption, ScSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-demo',
  imports: [ScSelect, ScOption],
  template: `
    <sc-select placeholder="Select a fruit">
      <sc-option value="apple">Apple</sc-option>
      <sc-option value="banana">Banana</sc-option>
      <sc-option value="blueberry">Blueberry</sc-option>
      <sc-option value="grapes">Grapes</sc-option>
      <sc-option value="pineapple">Pineapple</sc-option>
    </sc-select>
  `,
  host: {
    class: 'block w-[180px]',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDemo {}
