import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-with-text',
  imports: [ScCheckbox],
  template: `
    <div class="items-top flex space-x-2">
      <input id="terms1" sc-checkbox />
      <div class="grid gap-1.5 leading-none">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="terms1"
        >
          Accept terms and conditions
        </label>
        <p class="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWithText {}
