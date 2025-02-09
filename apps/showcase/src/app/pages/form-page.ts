import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScField } from '@semantic-components/ui';

@Component({
  selector: 'app-form-page',
  imports: [ScField],
  template: `
    <div class="m-10">
      <sc-field>
        <label for="id">Label</label>
        <input id="id" />
        <p>A description.</p>
      </sc-field>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormPage {}
