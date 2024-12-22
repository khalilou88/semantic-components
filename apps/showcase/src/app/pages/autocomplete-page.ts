import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAutocomplete } from '@semantic-components/ui';

@Component({
  selector: 'app-autocomplete-page',
  imports: [ScAutocomplete],
  template: `
    <div class="m-10">
      <sc-autocomplete />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AutocompletePage {}
