import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToggleSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-toggle-switch-page',
  imports: [ScToggleSwitch],
  template: `
    <div class="m-10">
      <button sc-toggle-switch></button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleSwitchPage {}
