import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

//use this for switch with icon

@Component({
  selector: 'button[sc-toggle-switch]',
  imports: [],
  template: `
    <p>toggle-switch works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToggleSwitch {}
