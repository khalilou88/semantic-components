import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScLabel, ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-switch-demo',
  imports: [ScSwitch, ScLabel, ReactiveFormsModule],
  template: `
    <form [formGroup]="switchForm">
      <div class="flex items-center space-x-2">
        <input id="airplane-mode" sc-switch formControlName="switch" />
        <label sc-label for="airplane-mode">Airplane Mode</label>
      </div>
    </form>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchDemo {
  switchForm = new FormGroup({
    switch: new FormControl(),
    switch2: new FormControl(),
  });
}
