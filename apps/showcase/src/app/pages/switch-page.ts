import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-switch-page',
  imports: [ScSwitch],
  template: `
    <br />
    <br />
    <br />

    <sc-switch>Airplane Mode</sc-switch>

    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <div class="flex items-center space-x-2">
        <button
          class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
          id="airplane-mode"
          type="button"
          role="switch"
          aria-checked="false"
          data-state="unchecked"
          value="on"
        >
          <span data-state="unchecked"></span>
        </button>
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="airplane-mode"
        >
          Airplane Mode
        </label>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchPage {}
