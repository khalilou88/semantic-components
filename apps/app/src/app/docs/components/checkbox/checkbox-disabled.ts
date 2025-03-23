import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-disabled',
  imports: [ScCheckbox],
  template: `
    <div class="flex items-center space-x-2">
      <input id="terms2" sc-checkbox disabled />
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="terms2"
      >
        Accept terms and conditions
      </label>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDisabled {}
