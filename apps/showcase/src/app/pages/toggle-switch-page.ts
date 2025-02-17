import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToggleSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-toggle-switch-page',
  imports: [ScToggleSwitch],
  template: `
    <div class="m-10">
      <button
        class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
        id="airplane-mode"
        type="button"
        role="switch"
        aria-checked="false"
        data-state="unchecked"
        value="on"
      >
        <span
          class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          data-state="unchecked"
        ></span>
      </button>

      <br />
      <br />

      <button sc-toggle-switch type="button"></button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleSwitchPage {}
