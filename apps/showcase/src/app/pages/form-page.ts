import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScDescription, ScField, ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-form-page',
  imports: [ScField, ScLabel, ScInput, ScDescription],
  template: `
    <div class="m-10">
      <sc-field>
        <label sc-label>Label</label>
        <input class="max-w-32" sc-input />
        <p sc-description>A description.</p>
      </sc-field>

      <br />
      <br />

      <sc-field>
        <label sc-label>Label</label>
        <p sc-description>A description.</p>
        <input sc-input />
      </sc-field>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormPage {}
