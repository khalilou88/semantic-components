import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxDisabled } from './checkbox-disabled';

@Component({
  selector: 'app-checkbox-disabled-section',
  imports: [CheckboxDisabled],
  template: `
    <app-checkbox-disabled />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDisabledSection {}
