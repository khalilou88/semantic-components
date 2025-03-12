import { ChangeDetectionStrategy, Component, ViewEncapsulation, output } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'button[sc-date-picker-toggle]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDatePickerToggle extends ScButtonBase {
  readonly toggled = output<void>();

  protected toggle() {
    this.toggled.emit();
  }
}
